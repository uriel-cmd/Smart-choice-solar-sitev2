type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate/80">{description}</p> : null}
    </div>
  );
}
