import { siteConfig } from "@/lib/site-config";

export function ServiceArea() {
  return (
    <section id="service-area" className="section-pad bg-iron text-titan-silver">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow-on-dark mb-2">Coverage area</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Based out of Kendall County, serving Northern, Western &amp; Chicago Suburbs
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {siteConfig.serviceArea.towns.map((town) => (
            <li
              key={town}
              className="rounded-sm border border-titan-silver/25 bg-titan-black/10 px-4 py-2 text-sm font-medium"
            >
              {town}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-titan-silver/85">
          We handle residential &amp; commercial jobs across the entire Chicagoland area. Not sure if your project location is covered? Call us at {siteConfig.phoneDisplay} — we handle jobs across all surrounding suburbs.
        </p>
      </div>
    </section>
  );
}
