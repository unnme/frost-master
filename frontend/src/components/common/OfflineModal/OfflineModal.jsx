import { useState } from "react";
import { X, Clock, Phone, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@utils/cn";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";
import { SITE_CONFIG } from "@config/siteConfig";
import { formatPhone } from "@components/home/heroSection/CallbackForm/helpers";
import { useCallbackRequest } from "@components/home/heroSection/CallbackForm/useCallbackRequest";

export const OfflineModal = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState(null);

  const { submitRequest, loading } = useCallbackRequest();

  useLockBodyScroll(true);

  const handlePhoneChange = (e) => {
    let raw = e.target.value.replace(/\D/g, "");
    if (!raw.startsWith("7")) raw = "7";
    raw = raw.slice(0, 11);
    setPhone(formatPhone(raw));
    setPhoneError(false);
    setServerError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 11) {
      setPhoneError(true);
      return;
    }

    try {
      await submitRequest({ name: "Заявка с сайта", phone });
      setDone(true);
      toast.success("Номер принят!", {
        description: "Перезвоним в рабочее время (8:00–22:00).",
      });
      setTimeout(onClose, 2000);
    } catch (err) {
      setServerError(err.message || "Произошла ошибка. Попробуйте позже.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-main-dark/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl bg-main-light p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 text-main-dark/40 transition-colors hover:text-main-dark"
        >
          <X className="h-5 w-5" />
        </button>

        {done ? (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <CheckCircle className="h-14 w-14 text-accent-green" />
            <p className="text-lg font-bold text-main-dark">Номер принят!</p>
            <p className="text-sm text-main-dark/60">Перезвоним в рабочее время</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-main-dark/5">
                <Clock className="h-7 w-7 text-main-dark/60" />
              </div>
              <h2 className="text-xl font-extrabold text-main-dark">Сейчас не работаем</h2>
              <p className="text-sm text-main-dark/60">
                Оставьте номер — перезвоним в рабочее время,{" "}
                <span className="font-semibold text-main-dark/80">ежедневно 8:00–22:00</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {serverError && (
                <div className="rounded-xl border border-red-400 bg-red-50 p-3 text-sm text-red-600">
                  {serverError}
                </div>
              )}

              <div>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-xl border bg-white p-3",
                    submitted && phoneError ? "border-red-400" : "border-main-dark/20",
                  )}
                >
                  <Phone className="h-4 w-4 shrink-0 text-text-disabled" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder={SITE_CONFIG.contacts.phone}
                    inputMode="tel"
                    autoFocus
                    className="flex-1 bg-transparent placeholder-text-disabled outline-none"
                  />
                </div>
                {submitted && phoneError && (
                  <p className="mt-1 text-sm text-red-400">Введите корректный номер телефона</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="gradient-blue-strong w-full rounded-2xl py-3 text-sm font-bold text-main-light transition-transform duration-200 hover:scale-102 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Отправка..." : "Перезвоните мне"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
