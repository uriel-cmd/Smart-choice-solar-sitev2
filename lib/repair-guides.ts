import type { Locale } from "@/lib/i18n";

type RepairGuideContent = {
  eyebrow: string;
  title: string;
  description: string;
  overview: string;
  signs: string[];
  checks: string[];
  note: string;
};

export type RepairGuide = {
  slug: string;
  serviceType: string;
  en: RepairGuideContent;
  es: RepairGuideContent;
};

export const repairGuides: RepairGuide[] = [
  {
    slug: "system-offline",
    serviceType: "Solar system offline diagnosis",
    en: {
      eyebrow: "Solar Troubleshooting Guide",
      title: "Solar System Offline Troubleshooting in California",
      description: "A practical diagnostic path for a solar system that shows no production, no communication, or an offline status.",
      overview: "An offline alert does not always mean the array stopped producing. The cause may be the inverter, gateway, internet connection, monitoring account, utility power, or electrical protection. A proper diagnosis confirms what is actually offline before parts are recommended.",
      signs: ["The monitoring app has stopped updating", "The inverter display is dark or shows standby", "Current production reads zero during daylight", "The gateway cannot communicate with site equipment"],
      checks: ["Monitoring timestamp and production history", "Inverter and gateway status indicators", "Utility power and relevant protection devices", "Site communication and account access"],
      note: "Do not open energized equipment. Record the displayed status and the time the system last reported normally."
    },
    es: {
      eyebrow: "Guía de Diagnóstico Solar",
      title: "Diagnóstico de Sistema Solar Fuera de Línea en California",
      description: "Una ruta práctica para un sistema sin producción, comunicación o conexión.",
      overview: "Una alerta fuera de línea no siempre significa que los paneles dejaron de producir. La causa puede estar en el inversor, gateway, internet, cuenta de monitoreo, red eléctrica o protección. El diagnóstico correcto confirma qué está desconectado antes de recomendar partes.",
      signs: ["La aplicación dejó de actualizar", "La pantalla del inversor está apagada o en espera", "La producción marca cero durante el día", "El gateway no se comunica con el equipo"],
      checks: ["Hora de actualización e historial de producción", "Indicadores del inversor y gateway", "Red eléctrica y protecciones relevantes", "Comunicación y acceso a la cuenta"],
      note: "No abras equipo energizado. Registra el estado mostrado y la última hora de operación normal."
    }
  },
  {
    slug: "low-production",
    serviceType: "Low solar production diagnosis",
    en: {
      eyebrow: "Solar Performance Guide",
      title: "Low Solar Production Diagnosis in California",
      description: "Find out why solar output dropped before assuming the panels need replacement.",
      overview: "Low production can come from a failed string or optimizer, inverter limits, shading, soiling, communication gaps, curtailment, or a change in household expectations. We compare current behavior with system history and design conditions.",
      signs: ["A sudden month-over-month production decline", "One roof plane or module group appears missing", "The utility bill increased without a clear usage change", "Daily production curves look interrupted or unusually flat"],
      checks: ["Historical production and weather context", "String, module, or optimizer reporting", "Inverter operating state and limits", "Shading, roof conditions, and visible damage"],
      note: "A monitoring screenshot and recent utility bills can shorten the diagnostic process."
    },
    es: {
      eyebrow: "Guía de Rendimiento Solar",
      title: "Diagnóstico de Baja Producción Solar en California",
      description: "Identifica por qué bajó la producción antes de asumir que los paneles deben reemplazarse.",
      overview: "La baja producción puede venir de un string u optimizador, límites del inversor, sombra, suciedad, comunicación, reducción de red o expectativas incorrectas. Comparamos el comportamiento actual con el historial y diseño.",
      signs: ["Caída repentina de producción mensual", "Falta un grupo de módulos o una sección del techo", "Subió la factura sin cambio claro de consumo", "La curva diaria aparece interrumpida o plana"],
      checks: ["Historial de producción y clima", "Reportes de strings, módulos u optimizadores", "Estado y límites del inversor", "Sombra, techo y daño visible"],
      note: "Una captura del monitoreo y facturas recientes pueden acelerar el diagnóstico."
    }
  },
  {
    slug: "inverter-fault",
    serviceType: "Solar inverter fault diagnosis",
    en: {
      eyebrow: "Inverter Troubleshooting Guide",
      title: "Solar Inverter Fault & Warning Diagnosis",
      description: "Professional troubleshooting for inverter shutdowns, warnings, and recurring solar error messages.",
      overview: "An inverter warning is evidence, not the complete diagnosis. Grid conditions, insulation resistance, DC input, temperature, communications, or internal equipment issues may trigger the message.",
      signs: ["A recurring fault or warning code", "The inverter repeatedly shuts down and restarts", "Production stops while monitoring remains online", "A red or amber status indicator persists"],
      checks: ["Exact error text and event history", "AC and DC operating conditions", "Visible wiring and equipment condition", "Manufacturer warranty and support path"],
      note: "Avoid repeated resets. Photograph the full message and equipment label before requesting service."
    },
    es: {
      eyebrow: "Guía de Diagnóstico de Inversor",
      title: "Diagnóstico de Fallas y Advertencias del Inversor Solar",
      description: "Diagnóstico profesional de apagados, advertencias y errores solares recurrentes.",
      overview: "Una advertencia del inversor es evidencia, no el diagnóstico completo. Condiciones de red, aislamiento, entrada DC, temperatura, comunicación o fallas internas pueden activar el mensaje.",
      signs: ["Código de falla recurrente", "El inversor se apaga y reinicia", "La producción se detiene pero el monitoreo sigue conectado", "Permanece una luz roja o ámbar"],
      checks: ["Texto exacto e historial del error", "Condiciones AC y DC", "Condición visible de cableado y equipo", "Garantía y soporte del fabricante"],
      note: "Evita reinicios repetidos. Fotografía el mensaje completo y la etiqueta del equipo."
    }
  },
  {
    slug: "battery-issues",
    serviceType: "Solar battery troubleshooting",
    en: {
      eyebrow: "Battery Troubleshooting Guide",
      title: "Solar Battery & Backup System Troubleshooting",
      description: "Diagnosis for a battery that will not charge, discharge, remain online, or provide expected backup.",
      overview: "Battery behavior depends on operating mode, reserve settings, software, gateway communication, solar production, household loads, and utility status. Diagnosis should review the whole energy system.",
      signs: ["The battery remains at one state of charge", "Backup is unavailable during an outage", "The battery or gateway repeatedly goes offline", "Solar production is not charging the battery as expected"],
      checks: ["Operating mode and reserve settings", "Gateway and battery communication", "Solar, load, and grid power flow", "Events, updates, warranty, and equipment state"],
      note: "Battery equipment can remain energized during an outage. Leave covers closed and use the manufacturer-approved shutdown process only."
    },
    es: {
      eyebrow: "Guía de Diagnóstico de Batería",
      title: "Diagnóstico de Batería Solar y Sistema de Respaldo",
      description: "Diagnóstico para una batería que no carga, descarga, permanece conectada o respalda como se espera.",
      overview: "El comportamiento depende del modo, reserva, software, comunicación, producción solar, cargas y red. El diagnóstico debe revisar todo el sistema de energía.",
      signs: ["La batería permanece en un nivel de carga", "El respaldo no está disponible durante un apagón", "La batería o gateway se desconecta", "La producción solar no carga como se espera"],
      checks: ["Modo de operación y reserva", "Comunicación de gateway y batería", "Flujo solar, cargas y red", "Eventos, actualizaciones, garantía y estado"],
      note: "La batería puede seguir energizada durante un apagón. Mantén las cubiertas cerradas."
    }
  },
  {
    slug: "monitoring-offline",
    serviceType: "Solar monitoring repair",
    en: {
      eyebrow: "Monitoring Troubleshooting Guide",
      title: "Solar Monitoring Offline & Communication Repair",
      description: "Restore useful system visibility when an app, portal, gateway, Wi-Fi, or cellular connection stops reporting.",
      overview: "A monitoring outage can hide normal production or a real equipment problem. We separate internet and account issues from inverter, meter, gateway, and field communication faults.",
      signs: ["The app shows stale data", "A gateway reports no connection", "Some devices appear while others are missing", "Production exists at the inverter but not in the portal"],
      checks: ["Last successful report and account ownership", "Local network or cellular connection", "Gateway-to-equipment communication", "Meter and inverter data consistency"],
      note: "Save account access details securely; do not publish serial numbers or login credentials in public messages."
    },
    es: {
      eyebrow: "Guía de Monitoreo Solar",
      title: "Reparación de Monitoreo Solar y Comunicación",
      description: "Recupera visibilidad cuando la aplicación, portal, gateway, Wi-Fi o conexión celular deja de reportar.",
      overview: "Una falla de monitoreo puede ocultar producción normal o un problema real. Separamos problemas de internet y cuenta de fallas del inversor, medidor, gateway y comunicación.",
      signs: ["La aplicación muestra datos atrasados", "El gateway no tiene conexión", "Aparecen algunos equipos y faltan otros", "El inversor produce pero el portal no reporta"],
      checks: ["Último reporte y propiedad de la cuenta", "Red local o conexión celular", "Comunicación entre gateway y equipo", "Consistencia de datos del medidor e inversor"],
      note: "Protege los datos de acceso; no publiques números de serie o contraseñas."
    }
  },
  {
    slug: "removal-reinstallation",
    serviceType: "Solar removal and reinstallation review",
    en: {
      eyebrow: "Roof & Solar Service Guide",
      title: "Solar Panel Removal & Reinstallation Review",
      description: "Coordinate solar equipment safely when roofing, repairs, remodeling, or equipment replacement affects the array.",
      overview: "Removal and reinstallation is more than moving panels. The scope should account for shutdown, labeling, attachment condition, waterproofing, storage, code considerations, testing, and monitoring after the work.",
      signs: ["A roof replacement is scheduled", "Leaks or damaged roofing are near attachments", "An array must move for remodeling", "Equipment needs replacement or relocation"],
      checks: ["System ownership and warranty terms", "Roof and attachment condition", "Original plans and equipment layout", "Recommissioning and production verification"],
      note: "Coordinate the solar and roofing scopes before either crew starts to reduce delays and avoid unclear responsibility."
    },
    es: {
      eyebrow: "Guía de Techo y Solar",
      title: "Revisión de Retiro y Reinstalación de Paneles Solares",
      description: "Coordina el equipo solar cuando el techo, reparaciones o remodelación afectan el sistema.",
      overview: "Retirar y reinstalar es más que mover paneles. El alcance debe considerar apagado, etiquetas, anclajes, impermeabilización, almacenamiento, código, pruebas y monitoreo.",
      signs: ["Se programó un techo nuevo", "Hay goteras o daño cerca de anclajes", "El sistema debe moverse por remodelación", "Equipo requiere reemplazo o reubicación"],
      checks: ["Propiedad y garantía", "Condición de techo y anclajes", "Planos y distribución original", "Puesta en marcha y verificación"],
      note: "Coordina el alcance solar y del techo antes de comenzar para reducir retrasos y responsabilidad confusa."
    }
  },
  ...[
    ["solaredge", "SolarEdge", "inverter, optimizer, monitoring, and communication", "inversor, optimizadores, monitoreo y comunicación"],
    ["enphase", "Enphase", "microinverter, gateway, production, and communication", "microinversores, gateway, producción y comunicación"],
    ["tesla", "Tesla", "solar inverter, Powerwall, gateway, monitoring, and backup", "inversor solar, Powerwall, gateway, monitoreo y respaldo"],
    ["sma", "SMA", "inverter, display, grid, production, and communication", "inversor, pantalla, red, producción y comunicación"],
    ["fronius", "Fronius", "inverter, datalogger, production, and communication", "inversor, datalogger, producción y comunicación"],
    ["power-one-aurora", "Power-One / Aurora", "legacy inverter, display, production, and replacement-path", "inversor anterior, pantalla, producción y opciones de reemplazo"]
  ].map(([slug, brand, focusEn, focusEs]) => ({
    slug,
    serviceType: `${brand} solar equipment diagnosis`,
    en: {
      eyebrow: `${brand} Solar Service Guide`,
      title: `${brand} Solar Inverter & System Repair in California`,
      description: `Independent troubleshooting for ${brand} ${focusEn} issues in residential solar systems.`,
      overview: `${brand} alerts can point to an equipment fault, but the repair path also depends on system generation, site wiring, communications, account access, warranty status, and parts availability. We document the symptom and verify the surrounding system before recommending work.`,
      signs: ["The app or portal shows an error or missing device", "Production is zero, intermittent, or lower than expected", "The inverter or gateway is offline", "A warning returns after a normal restart"],
      checks: ["Model, serial, firmware, and equipment generation", "Event history and production data", "Relevant AC, DC, and communication conditions", "Warranty, support, parts, and repair options"],
      note: `Smart Choice Solar is an independent service provider. Use of the ${brand} name identifies installed equipment and does not imply manufacturer authorization or affiliation.`
    },
    es: {
      eyebrow: `Guía de Servicio Solar ${brand}`,
      title: `Reparación de Inversor y Sistema Solar ${brand} en California`,
      description: `Diagnóstico independiente de problemas de ${focusEs} en sistemas residenciales ${brand}.`,
      overview: `Las alertas ${brand} pueden señalar una falla, pero la reparación también depende de la generación, cableado, comunicación, acceso, garantía y partes. Documentamos el síntoma y verificamos el sistema antes de recomendar trabajo.`,
      signs: ["La aplicación muestra error o equipo faltante", "La producción es cero, intermitente o baja", "El inversor o gateway está desconectado", "La advertencia regresa después de un reinicio normal"],
      checks: ["Modelo, serie, firmware y generación", "Historial de eventos y producción", "Condiciones AC, DC y comunicación", "Garantía, soporte, partes y opciones"],
      note: `Smart Choice Solar es un proveedor independiente. El uso del nombre ${brand} identifica el equipo y no implica autorización o afiliación del fabricante.`
    }
  })) as RepairGuide[]
];

export function getRepairGuide(slug: string) {
  return repairGuides.find((guide) => guide.slug === slug);
}

export function getRepairGuideContent(guide: RepairGuide, locale: Locale) {
  return guide[locale];
}

