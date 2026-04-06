"use client";

import { useEffect, useMemo, useState } from "react";

import { useLanguage, useTranslation } from "@/components/language-provider";
import {
  calculateEstimate,
  estimatorInitialData,
  isSupportedZip,
  type EstimatorData
} from "@/lib/estimator";

type EstimatorModalProps = {
  isOpen: boolean;
  initialZip?: string;
  initialStep?: number;
  onClose: () => void;
  onSubmitted?: () => void;
};

function OptionGrid({
  options,
  selected,
  onSelect
}: {
  options: Array<{ label: string; value: string }>;
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onSelect(option.value)}
          className={`rounded-[24px] border p-5 text-left transition ${
            selected === option.value
              ? "border-sky bg-sky/10 shadow-glow"
              : "border-line bg-white hover:border-sun/40 hover:bg-cloud"
          }`}
        >
          <span className="block text-sm font-semibold text-slate">{option.label}</span>
        </button>
      ))}
    </div>
  );
}

export function EstimatorModal({
  isOpen,
  initialZip,
  initialStep = 0,
  onClose,
  onSubmitted
}: EstimatorModalProps) {
  const { language } = useLanguage();
  const t = useTranslation();
  const localizedSteps =
    language === "es"
      ? [
          { id: "zip", title: "ZIP de servicio", description: "Comienza con el código postal de tu hogar." },
          { id: "homeType", title: "Tipo de hogar", description: "Cuéntanos qué tipo de propiedad tienes." },
          { id: "homeownerStatus", title: "Situación del propietario", description: "Esto nos ayuda a adaptar el siguiente paso." },
          { id: "billRange", title: "Factura eléctrica", description: "Elige el rango más cercano a tu factura promedio." },
          { id: "utilityProvider", title: "Compañía eléctrica", description: "Ajustaremos el estimado al contexto correcto." },
          { id: "roofCondition", title: "Estado del techo", description: "El momento del techo puede cambiar la mejor ruta del proyecto." },
          { id: "shadeExposure", title: "Exposición solar", description: "Ayúdanos a medir las condiciones probables de producción." },
          { id: "batteryInterest", title: "Interés en batería", description: "Cuéntanos qué tan importante es el respaldo eléctrico." },
          { id: "goal", title: "Meta principal", description: "¿Qué es lo más importante para este proyecto?" },
          { id: "timeline", title: "Tiempo del proyecto", description: "¿Cuándo te gustaría avanzar?" },
          { id: "contact", title: "Desbloquear estimado", description: "¿A dónde te enviamos el estimado detallado?" }
        ]
      : [
          { id: "zip", title: "Service ZIP", description: "Start with your home ZIP code." },
          { id: "homeType", title: "Home Type", description: "Tell us what kind of property you have." },
          { id: "homeownerStatus", title: "Homeowner Status", description: "This helps us tailor the next step." },
          { id: "billRange", title: "Electric Bill", description: "Choose the range closest to your average bill." },
          { id: "utilityProvider", title: "Utility Provider", description: "We’ll match your estimate to the right context." },
          { id: "roofCondition", title: "Roof Condition", description: "Roof timing can change the best project path." },
          { id: "shadeExposure", title: "Sun Exposure", description: "Help us gauge likely production conditions." },
          { id: "batteryInterest", title: "Battery Interest", description: "Let us know how important backup power is." },
          { id: "goal", title: "Primary Goal", description: "What matters most for this project?" },
          { id: "timeline", title: "Project Timeline", description: "When are you hoping to move forward?" },
          { id: "contact", title: "Unlock Estimate", description: "Where should we send the detailed estimate?" }
        ];
  const localizedOptions = {
    homeType:
      language === "es"
        ? [
            { value: "Single-family home", label: "Casa unifamiliar" },
            { value: "Townhome", label: "Townhome" },
            { value: "Duplex / multi-unit", label: "Dúplex / multifamiliar" },
            { value: "Not sure", label: "No estoy seguro" }
          ]
        : [
            { value: "Single-family home", label: "Single-family home" },
            { value: "Townhome", label: "Townhome" },
            { value: "Duplex / multi-unit", label: "Duplex / multi-unit" },
            { value: "Not sure", label: "Not sure" }
          ],
    homeownerStatus:
      language === "es"
        ? [
            { value: "I own the home", label: "Soy propietario" },
            { value: "I’m buying soon", label: "Voy a comprar pronto" },
            { value: "I’m researching for later", label: "Estoy investigando para después" }
          ]
        : [
            { value: "I own the home", label: "I own the home" },
            { value: "I’m buying soon", label: "I’m buying soon" },
            { value: "I’m researching for later", label: "I’m researching for later" }
          ],
    billRange:
      language === "es"
        ? [
            { value: "Under $125", label: "Menos de $125" },
            { value: "$125-$200", label: "$125-$200" },
            { value: "$200-$300", label: "$200-$300" },
            { value: "$300-$450", label: "$300-$450" },
            { value: "$450+", label: "$450+" }
          ]
        : [
            { value: "Under $125", label: "Under $125" },
            { value: "$125-$200", label: "$125-$200" },
            { value: "$200-$300", label: "$200-$300" },
            { value: "$300-$450", label: "$300-$450" },
            { value: "$450+", label: "$450+" }
          ],
    utilityProvider:
      language === "es"
        ? [
            { value: "SCE", label: "SCE" },
            { value: "PG&E", label: "PG&E" },
            { value: "SDG&E", label: "SDG&E" },
            { value: "SMUD", label: "SMUD" },
            { value: "LADWP", label: "LADWP" },
            { value: "Other / not sure", label: "Otra / no estoy seguro" }
          ]
        : [
            { value: "SCE", label: "SCE" },
            { value: "PG&E", label: "PG&E" },
            { value: "SDG&E", label: "SDG&E" },
            { value: "SMUD", label: "SMUD" },
            { value: "LADWP", label: "LADWP" },
            { value: "Other / not sure", label: "Other / not sure" }
          ],
    roofCondition:
      language === "es"
        ? [
            { value: "Newer roof", label: "Techo más nuevo" },
            { value: "10-15 years old", label: "10-15 años de edad" },
            { value: "May need work soon", label: "Podría necesitar trabajo pronto" },
            { value: "Not sure", label: "No estoy seguro" }
          ]
        : [
            { value: "Newer roof", label: "Newer roof" },
            { value: "10-15 years old", label: "10-15 years old" },
            { value: "May need work soon", label: "May need work soon" },
            { value: "Not sure", label: "Not sure" }
          ],
    shadeExposure:
      language === "es"
        ? [
            { value: "Mostly full sun", label: "Mayormente pleno sol" },
            { value: "Some shade", label: "Algo de sombra" },
            { value: "Heavy shade / not sure", label: "Mucha sombra / no estoy seguro" }
          ]
        : [
            { value: "Mostly full sun", label: "Mostly full sun" },
            { value: "Some shade", label: "Some shade" },
            { value: "Heavy shade / not sure", label: "Heavy shade / not sure" }
          ],
    batteryInterest:
      language === "es"
        ? [
            { value: "Yes, I want backup power", label: "Sí, quiero energía de respaldo" },
            { value: "Maybe, depending on cost", label: "Tal vez, dependiendo del costo" },
            { value: "Solar only for now", label: "Solo solar por ahora" }
          ]
        : [
            { value: "Yes, I want backup power", label: "Yes, I want backup power" },
            { value: "Maybe, depending on cost", label: "Maybe, depending on cost" },
            { value: "Solar only for now", label: "Solar only for now" }
          ],
    goal:
      language === "es"
        ? [
            { value: "Lower electric bills", label: "Reducir la factura eléctrica" },
            { value: "Backup power", label: "Energía de respaldo" },
            { value: "Roof + solar planning", label: "Planificación de techo + solar" },
            { value: "Just comparing options", label: "Solo comparando opciones" }
          ]
        : [
            { value: "Lower electric bills", label: "Lower electric bills" },
            { value: "Backup power", label: "Backup power" },
            { value: "Roof + solar planning", label: "Roof + solar planning" },
            { value: "Just comparing options", label: "Just comparing options" }
          ],
    timeline:
      language === "es"
        ? [
            { value: "ASAP", label: "Lo antes posible" },
            { value: "Within 3 months", label: "Dentro de 3 meses" },
            { value: "3-6 months", label: "3-6 meses" },
            { value: "Just researching", label: "Solo investigando" }
          ]
        : [
            { value: "ASAP", label: "ASAP" },
            { value: "Within 3 months", label: "Within 3 months" },
            { value: "3-6 months", label: "3-6 months" },
            { value: "Just researching", label: "Just researching" }
          ]
  } as const;
  const [step, setStep] = useState(initialStep);
  const [data, setData] = useState<EstimatorData>({ ...estimatorInitialData, zip: initialZip ?? "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setData((current) => ({ ...current, zip: initialZip ?? current.zip }));
      setStep(initialZip ? Math.max(1, initialStep) : initialStep);
      setStatus("idle");
      setError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [initialStep, initialZip, isOpen]);

  const estimate = useMemo(() => calculateEstimate(data), [data]);
  const progress = ((Math.min(step, localizedSteps.length - 1) + 1) / localizedSteps.length) * 100;

  if (!isOpen) {
    return null;
  }

  const activeStep = localizedSteps[step];

  function updateField<K extends keyof EstimatorData>(key: K, value: EstimatorData[K]) {
    setData((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function validateStep() {
    switch (activeStep.id) {
      case "zip":
        if (!/^\d{5}$/.test(data.zip)) {
          return language === "en" ? "Enter a valid 5-digit ZIP code." : "Ingresa un código postal válido de 5 dígitos.";
        }
        if (!isSupportedZip(data.zip)) {
          return language === "en" ? "Please enter a valid California ZIP code to continue." : "Ingresa un código postal válido de California para continuar.";
        }
        return "";
      case "contact":
        if (!data.firstName || !data.lastName || !data.phone || !data.email || !data.address || !/^\d{5}$/.test(data.zip)) {
          return language === "en" ? "Please complete all contact fields to unlock your estimate." : "Completa todos los campos de contacto para desbloquear tu estimado.";
        }
        return "";
      default: {
        const value = data[activeStep.id as keyof EstimatorData];
        return value ? "" : language === "en" ? "Please choose an option to continue." : "Elige una opción para continuar.";
      }
    }
  }

  async function handleNext() {
    const validationError = validateStep();

    if (validationError) {
      setError(validationError);
      return;
    }

    if (activeStep.id === "contact") {
      setStatus("submitting");

      try {
        const response = await fetch("/api/estimate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            estimate,
            language
          })
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        setStatus("success");
        onSubmitted?.();
      } catch (submissionError) {
        console.error(submissionError);
        setStatus("error");
        setError(language === "en" ? "Something went wrong while sending your estimate. Please try again." : "Algo salió mal al enviar tu estimado. Inténtalo de nuevo.");
      }

      return;
    }

    setStep((current) => Math.min(current + 1, localizedSteps.length - 1));
  }

  function renderStep() {
    switch (activeStep.id) {
      case "zip":
        return (
          <div className="grid gap-3">
            <label className="text-sm font-medium text-slate">
              {t.estimator.zip}
              <input
                value={data.zip}
                onChange={(event) => updateField("zip", event.target.value.replace(/\D/g, "").slice(0, 5))}
                className="mt-2 w-full rounded-[20px] border border-line bg-white px-4 py-4 text-lg font-semibold text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.zipPlaceholder}
              />
            </label>
          </div>
        );
      case "homeType":
      case "homeownerStatus":
      case "billRange":
      case "utilityProvider":
      case "roofCondition":
      case "shadeExposure":
      case "batteryInterest":
      case "goal":
      case "timeline":
        return (
          <OptionGrid
            options={localizedOptions[activeStep.id as keyof typeof localizedOptions]}
            selected={data[activeStep.id as keyof EstimatorData]}
            onSelect={(value) => updateField(activeStep.id as keyof EstimatorData, value)}
          />
        );
      case "contact":
        return (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate">
              {t.estimator.firstName}
              <input
                value={data.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
                className="mt-2 w-full rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.firstNamePlaceholder}
              />
            </label>
            <label className="text-sm font-medium text-slate">
              {t.estimator.lastName}
              <input
                value={data.lastName}
                onChange={(event) => updateField("lastName", event.target.value)}
                className="mt-2 w-full rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.lastNamePlaceholder}
              />
            </label>
            <label className="text-sm font-medium text-slate">
              {t.estimator.phone}
              <input
                value={data.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="mt-2 w-full rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.phonePlaceholder}
              />
            </label>
            <label className="text-sm font-medium text-slate">
              {t.estimator.zip}
              <input
                value={data.zip}
                onChange={(event) => updateField("zip", event.target.value.replace(/\D/g, "").slice(0, 5))}
                className="mt-2 w-full rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.zipPlaceholder}
              />
            </label>
            <label className="text-sm font-medium text-slate sm:col-span-2">
              {t.estimator.email}
              <input
                type="email"
                value={data.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="mt-2 w-full rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.emailPlaceholder}
              />
            </label>
            <label className="text-sm font-medium text-slate sm:col-span-2">
              {t.estimator.address}
              <input
                value={data.address}
                onChange={(event) => updateField("address", event.target.value)}
                className="mt-2 w-full rounded-[18px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
                placeholder={t.estimator.addressPlaceholder}
              />
            </label>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="fixed inset-0 z-[90] bg-ink/70 backdrop-blur-sm">
      <div className="flex min-h-full items-end justify-center sm:items-center">
        <div className="relative h-[100dvh] w-full overflow-hidden bg-white sm:h-auto sm:max-h-[92vh] sm:max-w-6xl sm:rounded-[36px]">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-ink"
          >
            {t.estimator.close}
          </button>
          <div className="grid h-full lg:grid-cols-[1.05fr,0.95fr]">
            <div className="overflow-y-auto px-5 pb-8 pt-16 sm:px-8 lg:px-10">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate/70">{t.estimator.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">
                  {t.estimator.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate/80">{activeStep.description}</p>
                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate/70">
                    <span>{activeStep.title}</span>
                    <span>{t.estimator.step} {Math.min(step + 1, localizedSteps.length)} {t.estimator.of} {localizedSteps.length}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-cloud">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky via-sky to-sun transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="mt-8">{renderStep()}</div>
                {error ? <p className="mt-4 text-sm font-medium text-red-700">{error}</p> : null}
                {status === "success" ? (
                  <div className="mt-6 rounded-[24px] border border-emerald-200 bg-emerald-50 p-5">
                    <p className="text-sm font-semibold text-emerald-800">{t.estimator.unlocked}</p>
                    <p className="mt-2 text-sm leading-7 text-emerald-900/85">
                      {t.estimator.unlockedDescription}
                    </p>
                  </div>
                ) : null}
                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(current - 1, 0))}
                    disabled={step === 0 || status === "submitting"}
                    className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t.estimator.back}
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={status === "submitting"}
                    className="accent-button px-6 py-3 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {activeStep.id === "contact"
                      ? status === "submitting"
                        ? t.estimator.sending
                        : t.estimator.unlockEstimate
                      : t.estimator.continue}
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden border-l border-line bg-cloud/70 lg:block">
              <div className="p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate/70">{t.estimator.preview}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate">{t.estimator.previewTitle}</h3>
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[24px] bg-white p-5 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.estimator.systemSize}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate">{estimate.systemSize}</p>
                    </div>
                    <div className="rounded-[24px] bg-white p-5 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.estimator.utilityOffset}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate">{estimate.billOffset}</p>
                    </div>
                    <div className="rounded-[24px] bg-white p-5 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">{t.estimator.suggestedPath}</p>
                      <p className="mt-2 text-xl font-semibold text-slate">{language === "en" ? estimate.recommendation : estimate.recommendation === "Solar + battery + roof" ? "Solar + batería + techo" : "Solar + batería"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
