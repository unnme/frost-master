import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export const ContactsBlock = ({ phone, telHref, telegramUrl, whatsappUrl }) => {
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
