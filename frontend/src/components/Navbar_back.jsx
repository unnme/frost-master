import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

import { useActiveSection } from "@hooks/useActiveSection";
import { GENERAL_DATA } from "@config/generalData";
import { NAV_ITEMS } from "@config/navItems";

const DesktopNav = ({ items, activeId }) => {
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
              className={`relative inline-block py-1 text-sm font-bold transition-colors ${
                activeId === id
                  ? "text-main-dark after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-main-orange after:content-['']"
                  : "text-main-dark/70 hover:text-main-dark"
              }`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ContactsBlock = ({ phone, telHref, telegramUrl, whatsappUrl }) => {
  return (
    <div className="flex items-center gap-4">
      {telHref && (
        <a
          href={telHref}
          aria-label="Позвонить"
        >
          <span className="pl-1 font-bold text-nowrap text-main-dark hover:font-extrabold hover:text-main-orange">
            {phone}
          </span>
        </a>
      )}

      {telegramUrl && (
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-main-dark transition-colors hover:text-blue-400"
        >
          <FaTelegramPlane className="h-6 w-6" />
        </a>
      )}

      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-main-dark transition-colors hover:text-green-400"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      )}
    </div>
  );
};

const MobileNav = ({ items, activeId, onItemClick }) => {
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

export const Navbar = () => {
  const { phone, telHref, telegramUrl, whatsappUrl } = GENERAL_DATA.contacts;

  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map(({ id }) => id));

  const toggleMenu = () => setOpen((p) => !p);
  const closeMenu = () => setOpen(false);

  /* =======================
     CLOSE ON SCROLL
  ======================= */
  useEffect(() => {
    if (!open) return;

    const onScroll = () => setOpen(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <div>
      <div className="border-x border-b-5 border-main-dark/20 bg-main-dark/10 px-6 backdrop-blur md:px-8 lg:rounded-b-2xl">
        <div className="flex h-(--navbar-height) items-center justify-between">
          {/* Бургер */}
          <button
            onClick={toggleMenu}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="hover:text-text-dark inline-flex items-center justify-center text-main-dark/60 transition-colors md:hidden"
          >
            {open ? (
              <HiXMark className="h-7 w-7" />
            ) : (
              <HiBars3 className="h-7 w-7" />
            )}
          </button>

          {/* Десктоп меню */}
          <DesktopNav
            items={NAV_ITEMS}
            activeId={activeId}
          />

          {/* Контакты */}
          <ContactsBlock
            phone={phone}
            telHref={telHref}
            telegramUrl={telegramUrl}
            whatsappUrl={whatsappUrl}
          />
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <MobileNav
          items={NAV_ITEMS}
          activeId={activeId}
          onItemClick={closeMenu}
        />
      )}
    </div>
  );
};
