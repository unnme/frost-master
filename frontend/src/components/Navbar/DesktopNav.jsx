import { cn } from "@utils/cn";

const getLinkCls = (isActive) => cn(
  "relative inline-block py-1 text-sm font-bold transition-colors",
  isActive
    ? "text-main-dark after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-main-orange after:content-['']"
    : "text-main-dark/70 hover:text-main-dark",
);

export const DesktopNav = ({ items, activeId }) => {
  return (
    <nav
      className="hidden md:block"
      aria-label="Основная навигация"
    >
      <ul className="flex items-center gap-7">
        {items.map(({ name, id }) => (
          <li key={id}>
            <a
              href={`/#${id}`}
              aria-current={activeId === id ? "page" : undefined}
              className={getLinkCls(activeId === id)}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
