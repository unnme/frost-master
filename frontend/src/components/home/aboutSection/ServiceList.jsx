import { SERVICES } from "@config/services";

export const ServiceList = () => (
  <div className="grid gap-4 px-6 md:px-8 sm:grid-cols-2 lg:grid-cols-3">
    {SERVICES.map(({ icon: Icon, title, description }) => (
      <article
        key={title}
        className="rounded-2xl border border-main-dark/10 bg-main-light p-5 shadow-sm"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-main-orange/10">
          <Icon className="h-6 w-6 text-main-orange" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-main-dark">{title}</h3>
        <p className="text-sm leading-relaxed text-main-dark/80">{description}</p>
      </article>
    ))}
  </div>
);
