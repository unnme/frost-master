import { CircleCheckBig, UserCheck, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    value: "10 тыс.",
    label: "Успешных ремонтов",
    icon: <CircleCheckBig className="text-accent-blue" />,
  },
  {
    value: "10",
    label: "Лет в профессии",
    icon: <UserCheck className="text-main-orange" />,
  },
  {
    value: "11",
    label: "Месяцев гарантии",
    icon: <ShieldCheck className="text-accent-green" />,
  },
  {
    value: "4.9",
    label: "Высокая оценка клиентов",
    icon: <Star className="text-accent-yellow" />,
  },
];

export const AboutStatsBar = () => (
  <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
    {stats.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center text-center"
      >
        <div className="flex items-center justify-center gap-2 text-3xl font-extrabold text-main-dark">
          {item.icon}
          <span>{item.value}</span>
        </div>
        <p className="mt-2 text-sm text-main-dark">{item.label}</p>
      </div>
    ))}
  </div>
);
