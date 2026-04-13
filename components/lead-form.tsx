"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

import { useLanguage, useTranslation } from "@/components/language-provider";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  message: ""
};

export function LeadForm({ compact = false, onSubmitted }: { compact?: boolean; onSubmitted?: () => void }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = useTranslation();
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          language,
          pagePath: pathname
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm(initialState);
      setStatus("success");
      onSubmitted?.();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative overflow-hidden rounded-[30px] border border-[#d7e8f2] bg-[linear-gradient(180deg,#eef6fb_0%,#e6f0f8_100%)] shadow-[0_22px_60px_rgba(26,48,82,0.1)] ${compact ? "p-5" : "p-6 sm:p-8"}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.68),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.14),transparent_42%)]" />
      <div className="relative">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/70">{t.leadForm.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate">
          {t.leadForm.title}
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate/75">
          {t.leadForm.description}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.firstName}
          <input
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={(event) => setForm({ ...form, firstName: event.target.value })}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none ring-0 transition focus:border-sky"
            placeholder={t.leadForm.firstNamePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.lastName}
          <input
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(event) => setForm({ ...form, lastName: event.target.value })}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none ring-0 transition focus:border-sky"
            placeholder={t.leadForm.lastNamePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.email}
          <input
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
            placeholder={t.leadForm.emailPlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.phone}
          <input
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
            placeholder={t.leadForm.phonePlaceholder}
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.address}
          <input
            required
            autoComplete="street-address"
            value={form.address}
            onChange={(event) => setForm({ ...form, address: event.target.value })}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
            placeholder={t.leadForm.addressPlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.zip}
          <input
            required
            value={form.zip}
            onChange={(event) => setForm({ ...form, zip: event.target.value.replace(/\D/g, "").slice(0, 5) })}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
            placeholder={t.leadForm.zipPlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          {t.leadForm.projectDetails}
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            rows={5}
            className="rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
            placeholder={t.leadForm.projectDetailsPlaceholder}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="accent-button mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? t.leadForm.sending : t.leadForm.submit}
      </button>
      <p className="mt-3 text-xs leading-6 text-slate/70">
        {t.leadForm.privacy}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-medium text-slate">{t.leadForm.chip1}</span>
        <span className="rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-medium text-slate">{t.leadForm.chip2}</span>
        <span className="rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-medium text-slate">{t.leadForm.chip3}</span>
      </div>
      {status === "success" ? (
        <p className="mt-3 text-sm font-medium text-emerald-700">{t.leadForm.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm font-medium text-red-700">{t.leadForm.error}</p>
      ) : null}
      </div>
    </form>
  );
}
