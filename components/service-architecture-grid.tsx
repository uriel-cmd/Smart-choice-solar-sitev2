import Link from "next/link";

type ServiceArchitectureItem = {
  title: string;
  description: string;
  links: string[];
};

export function ServiceArchitectureGrid({ items }: { items: ServiceArchitectureItem[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <article key={item.title} className="glass-panel-strong rounded-[30px] p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate/70">Division 0{index + 1}</p>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/35 to-sun/45 text-sm font-semibold text-slate">
              {index + 1}
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate/80">{item.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.links.map((link) => (
              <span key={link} className="rounded-full border border-line bg-white/90 px-3 py-2 text-xs font-medium text-slate">
                {link}
              </span>
            ))}
          </div>
          <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-ink">
            Talk to a project specialist
          </Link>
        </article>
      ))}
    </div>
  );
}
