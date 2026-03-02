import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@config/siteConfig";
import { cn } from "@utils/cn";
import { useContactsVisible } from "@hooks/useContactsVisible";

const SCROLL_THRESHOLD = 150;

const baseCls = [
  "fixed bottom-5 left-1/2 z-50 -translate-x-1/2",
  "inline-flex cursor-pointer items-center gap-2 rounded-full",
  "bg-main-orange px-6 py-3 text-base font-bold text-main-light whitespace-nowrap",
  "shadow-lg transition-all duration-300 hover:opacity-90 lg:hidden",
].join(" ");

export const FloatingCallButton = () => {
  const { phone, telHref } = SITE_CONFIG.contacts;
  const contactsVisible = useContactsVisible();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHidden = !isScrolled || contactsVisible;

  const btnCls = cn(
    baseCls,
    isHidden
      ? "translate-y-24 opacity-0 pointer-events-none"
      : "translate-y-0 opacity-100",
  );

  return (
    <a
      href={telHref}
      aria-label={`Позвонить по номеру ${phone}`}
      className={btnCls}
    >
      <Phone className="h-5 w-5 shrink-0" />
      {phone}
    </a>
  );
};
