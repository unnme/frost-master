import { useEffect } from "react";

/**
 * Hook to send client info (IP and user agent) to backend on first visit
 */
export const useSendClientInfo = () => {
  useEffect(() => {
    if (localStorage.getItem("clientInfoSent")) {
      return;
    }

    const sendClientInfo = async () => {
      const userAgent = navigator.userAgent;

      let ip = null;
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        if (res.ok) {
          const data = await res.json();
          ip = data.ip;
        }
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn("Failed to get IP:", e);
        }
      }

      try {
        const res = await fetch("/api/client-info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, userAgent }),
        });

        if (res.ok) {
          localStorage.setItem("clientInfoSent", "true");
        }
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn("Failed to send client info:", e);
        }
      }
    };

    sendClientInfo();
  }, []);
};
