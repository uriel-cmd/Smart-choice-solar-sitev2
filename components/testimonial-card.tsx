type TestimonialCardProps = {
  name: string;
  location: string;
  project?: string;
  quote: string;
  rating: number;
};

export function TestimonialCard({ name, location, project, quote, rating }: TestimonialCardProps) {
  return (
    <article className="glass-panel rounded-[30px] p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-sun">{Array.from({ length: rating }, () => "★").join(" ")}</div>
        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Verified
        </div>
      </div>
      <p className="mt-4 text-base leading-7 text-ink">“{quote}”</p>
      <div className="mt-6 border-t border-line/80 pt-4">
        <h3 className="font-semibold text-slate">{name}</h3>
        <p className="text-sm text-slate/75">
          {location}
          {project ? ` · ${project}` : ""}
        </p>
      </div>
    </article>
  );
}
