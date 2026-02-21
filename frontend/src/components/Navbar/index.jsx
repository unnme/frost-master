import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

import { useActiveSection } from "@hooks/useActiveSection";
import { useCloseOnScroll } from "./useCloseOnScroll";
import { SITE_CONFIG } from "@config/siteConfig";
import { NAV_ITEMS } from "@config/navItems";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ContactsBlock } from "./ContactsBlock";

export const Navbar = () => {
  const { phone, telHref, telegramUrl, whatsappUrl } = SITE_CONFIG.contacts;

  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map(({ id }) => id));

  const toggleMenu = () => setOpen((p) => !p);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useCloseOnScroll(open, closeMenu);

  return (
    <div>
      <div className="border-x border-b-5 border-main-dark/20 bg-main-dark/10 px-6 backdrop-blur md:px-8 lg:rounded-b-2xl">
        <div className="flex h-(--navbar-height) items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="hover:text-text-dark inline-flex items-center justify-center text-main-dark/60 transition-colors md:hidden"
          >
            {open ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>

          {/* Desktop navigation */}
          <DesktopNav
            items={NAV_ITEMS}
            activeId={activeId}
          />

          {/* Contacts */}
          <ContactsBlock
            phone={phone}
            telHref={telHref}
            telegramUrl={telegramUrl}
            whatsappUrl={whatsappUrl}
          />
        </div>
      </div>

      {/* Mobile menu */}
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
