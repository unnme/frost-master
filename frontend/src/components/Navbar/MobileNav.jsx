export const MobileNav = ({ items, activeId, onItemClick }) => {
  return (
    <div className="rounded-b-md bg-main-light backdrop-blur md:hidden">
      <nav aria-label="Мобильная навигация">
        <ul className="space-y-1 px-2 py-2">
          {items.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={onItemClick}
                aria-current={activeId === id ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  activeId === id
                    ? "bg-black/5 text-black"
                    : "text-gray-800 hover:bg-black/5"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
