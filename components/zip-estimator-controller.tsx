"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { useTranslation } from "@/components/language-provider";
import { EstimatorModal } from "@/components/estimator-modal";
import { LeadForm } from "@/components/lead-form";
import { isSupportedZip } from "@/lib/estimator";

const DISMISS_KEY = "scs-zip-popup-dismissed";
const SUBMITTED_KEY = "scs-estimator-submitted";
const OPEN_EVENT = "scs:open-estimator";
const CONTACT_OPEN_EVENT = "scs:open-contact";
const POPUP_DELAY_MS = 12000;

function hasSuppressionFlag() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(DISMISS_KEY) === "true" || window.localStorage.getItem(SUBMITTED_KEY) === "true";
}

export function openEstimatorEvent() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT));
  }
}

export function openContactEvent() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONTACT_OPEN_EVENT));
  }
}

export function ZipEstimatorController() {
  const t = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [popupOpen, setPopupOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [zip, setZip] = useState("");
  const [zipStatus, setZipStatus] = useState<"idle" | "out_of_area">("idle");
  const [outOfAreaEmail, setOutOfAreaEmail] = useState("");

  const estimatorRequested = useMemo(() => searchParams.get("estimator") === "1", [searchParams]);

  useEffect(() => {
    if (estimatorRequested) {
      window.localStorage.setItem(DISMISS_KEY, "true");
      setEstimatorOpen(true);
    }
  }, [estimatorRequested, pathname]);

  useEffect(() => {
    const onOpenEstimator = () => {
      window.localStorage.setItem(DISMISS_KEY, "true");
      setEstimatorOpen(true);
      setPopupOpen(false);
    };

    const onOpenContact = () => {
      setContactOpen(true);
    };

    window.addEventListener(OPEN_EVENT, onOpenEstimator);
    window.addEventListener(CONTACT_OPEN_EVENT, onOpenContact);

    return () => {
      window.removeEventListener(OPEN_EVENT, onOpenEstimator);
      window.removeEventListener(CONTACT_OPEN_EVENT, onOpenContact);
    };
  }, []);

  useEffect(() => {
    if (hasSuppressionFlag()) {
      return;
    }

    const delayId = window.setTimeout(() => {
      if (popupOpen || estimatorOpen || hasSuppressionFlag()) {
        return;
      }

      setPopupOpen(true);
    }, POPUP_DELAY_MS);

    return () => {
      window.clearTimeout(delayId);
    };
  }, [estimatorOpen, popupOpen]);

  function dismissPopup() {
    window.localStorage.setItem(DISMISS_KEY, "true");
    setPopupOpen(false);
  }

  function handleZipSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^\d{5}$/.test(zip)) {
      return;
    }

    if (isSupportedZip(zip)) {
      window.localStorage.setItem(DISMISS_KEY, "true");
      setPopupOpen(false);
      setEstimatorOpen(true);
      setZipStatus("idle");
      return;
    }

    setZipStatus("out_of_area");
  }

  async function handleOutOfAreaSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch("/api/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        zip,
        email: outOfAreaEmail,
        source: "out_of_area_waitlist",
        pagePath: pathname
      })
    });

    dismissPopup();
  }

  return (
    <>
      {contactOpen ? (
        <div className="fixed inset-0 z-[120] overflow-y-auto bg-ink/65 backdrop-blur-sm">
          <div className="flex min-h-[100dvh] items-start justify-center px-3 pb-[calc(112px+env(safe-area-inset-bottom))] pt-5 sm:items-center sm:p-6">
            <div className="w-full max-w-2xl sm:rounded-[32px] sm:bg-white sm:p-6">
              <div className="sticky top-3 z-10 mb-3 flex justify-end sm:static sm:mb-4">
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(26,48,82,0.12)]"
                >
                  {t.zipPopup.close}
                </button>
              </div>
              <LeadForm compact onSubmitted={() => window.setTimeout(() => setContactOpen(false), 1400)} />
            </div>
          </div>
        </div>
      ) : null}
      {popupOpen ? (
        <div className="fixed inset-0 z-[80] bg-ink/65 backdrop-blur-sm">
          <div className="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-6">
            <div className="w-full bg-white p-6 sm:max-w-xl sm:rounded-[32px] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate/70">{t.zipPopup.serviceCheck}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate">
                    {t.zipPopup.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate/80">
                    {t.zipPopup.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={dismissPopup}
                  className="rounded-full border border-line px-3 py-2 text-sm font-semibold text-ink"
                >
                  {t.zipPopup.close}
                </button>
              </div>
              {zipStatus === "idle" ? (
                <form className="mt-6 grid gap-4" onSubmit={handleZipSubmit}>
                  <input
                    value={zip}
                    onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
                    placeholder={t.zipPopup.zipPlaceholder}
                    className="w-full rounded-[20px] border border-line bg-white px-4 py-4 text-lg font-semibold text-ink outline-none transition focus:border-sky"
                  />
                  <button type="submit" className="accent-button px-5 py-4">
                    {t.zipPopup.unlock}
                  </button>
                </form>
              ) : (
                <div className="mt-6 rounded-[24px] border border-line bg-cloud p-5">
                  <p className="text-lg font-semibold text-slate">{t.zipPopup.outTitle}</p>
                  <p className="mt-3 text-sm leading-7 text-slate/80">
                    {t.zipPopup.outDescription}
                  </p>
                  <form className="mt-4 grid gap-3 sm:grid-cols-[1fr,auto]" onSubmit={handleOutOfAreaSubmit}>
                    <input
                      type="email"
                      value={outOfAreaEmail}
                      onChange={(event) => setOutOfAreaEmail(event.target.value)}
                      placeholder={t.leadForm.email}
                      className="rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                    />
                    <button type="submit" className="accent-button px-5 py-3">
                      {t.header.getInTouch}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
      <EstimatorModal
        isOpen={estimatorOpen}
        initialZip={zip}
        initialStep={zip ? 1 : 0}
        onClose={() => {
          window.localStorage.setItem(DISMISS_KEY, "true");
          setEstimatorOpen(false);
        }}
        onSubmitted={() => {
          window.localStorage.setItem(SUBMITTED_KEY, "true");
        }}
      />
    </>
  );
}
