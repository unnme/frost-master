import { HiChevronDown } from "react-icons/hi2";

const faqItems = [
  {
    question: "Сколько стоит выезд?",
    answer:
      "Выезд мастера по Краснодару — бесплатно при согласии на ремонт. Если вы откажетесь от работ, оплачивается только диагностика.",
  },
  {
    question: "Сколько занимает ремонт?",
    answer:
      "Ремонт обычно занимает от 30 минут до 2 часов. Зависит от сложности поломки и деталей. Точный срок назовёт мастер после диагностики.",
  },
  {
    question: "Что если мастер не починит?",
    answer:
      "Если починка невозможна или экономически нецелесообразна, вы оплачиваете только диагностику. Никаких скрытых платежей.",
  },
  {
    question: "Есть ли гарантия?",
    answer:
      "Да, на все виды работ и запчасти предоставляем гарантию от 3 до 12 месяцев.",
  },
  {
    question: "Какие бренды ремонтируете?",
    answer:
      "Ремонтируем большинство брендов: Samsung, LG, Bosch, Indesit, Atlant, Ariston, Beko, Haier и другие.",
  },
  {
    question: "Работаете в выходные?",
    answer: "Да, выезжаем ежедневно — включая выходные и праздники.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="rounded-2xl border border-main-dark/10 bg-main-light shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-base font-medium text-main-dark">
          {item.question}
        </span>
        <HiChevronDown
          className={`h-5 w-5 text-main-dark/70 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-5 pb-4 text-sm text-main-dark/80">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export const FaqList = ({ openIndex, toggle }) => {
  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <FaqItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};
