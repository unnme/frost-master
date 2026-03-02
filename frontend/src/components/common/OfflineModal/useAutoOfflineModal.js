import { useState } from "react";
import { SITE_CONFIG } from "@config/siteConfig";

const SESSION_KEY = "offline_modal_shown";
const isSSR = typeof window === "undefined";

const isOutsideBusinessHours = () => {
  const { start, end, timezone } = SITE_CONFIG.contacts.businessHours;
  const hour = parseInt(
    new Intl.DateTimeFormat("ru", { hour: "numeric", hour12: false, timeZone: timezone }).format(
      new Date(),
    ),
    10,
  );
  return hour < start || hour >= end;
};

export const useAutoOfflineModal = () => {
  const [isOpen, setIsOpen] = useState(
    () => !isSSR && !sessionStorage.getItem(SESSION_KEY) && isOutsideBusinessHours(),
  );

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIsOpen(false);
  };

  const forceOpen = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsOpen(true);
  };

  return { isOpen, close, forceOpen };
};
