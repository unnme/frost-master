const contactInfo = {
  phone: "+7 (927) 918-88-18",
  email: "whereisxur@icloud.com",
  address: "г. Краснодар, Бжегокайская 31/3 к3",
  hours: "Ежедневно, 8:00 – 22:00",
};

export const ContactCard = ({ className = "" }) => (
  <div
    className={`w-full flex-col justify-center border border-main-dark/10 bg-white p-5 shadow-md md:rounded-2xl ${className} `}
  >
    <h2 className="text-2xl font-extrabold">
      <span className="text-blue-900/80">Frost</span>
      <span className="text-main-orange/90">Master</span>
    </h2>
    <h5 className="text-md mb-3 font-semibold text-main-dark">
      Свяжитесь с нами!
    </h5>
    <p className="flex items-center gap-2 text-sm text-gray-700">
      <span className="text-main-dark/60">📞</span>
      <a
        href={`tel:${contactInfo.phone}`}
        className="text-main-dark transition-colors hover:text-main-orange hover:underline"
      >
        {contactInfo.phone}
      </a>
    </p>

    <p className="mt-1 flex items-center gap-2 text-sm text-gray-700">
      <span className="text-main-dark/60">✉️</span>
      <span className="break-all">{contactInfo.email}</span>
    </p>

    <p className="mt-1 flex items-start gap-2 text-sm text-gray-700">
      <span className="mt-0.5 text-main-dark/60">📍</span>
      <span>{contactInfo.address}</span>
    </p>

    <p className="mt-2 flex items-center gap-2 text-sm text-gray-700">
      <span className="text-main-dark/60">🕒</span>
      <span>{contactInfo.hours}</span>
    </p>
  </div>
);
