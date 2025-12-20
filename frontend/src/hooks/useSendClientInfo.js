import { useEffect } from "react";

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
        const data = await res.json();
        ip = data.ip;
      } catch (e) {
        console.warn("Не удалось получить IP:", e);
      }

      try {
        await fetch("/api/client-info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, userAgent }),
        });

        localStorage.setItem("clientInfoSent", "true");
      } catch (e) {
        console.warn("Ошибка отправки клиентских данных:", e);
      }
    };

    sendClientInfo();
  }, []);
};
