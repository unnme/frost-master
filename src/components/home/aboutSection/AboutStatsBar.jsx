import { AiOutlineFileProtect } from "react-icons/ai";
import { GoStar } from "react-icons/go";
import { GrCompliance } from "react-icons/gr";
import { LuUserCheck } from "react-icons/lu";

const stats = [
  {
    value: "10 тыс.",
    label: "Успешных ремонтов",
    icon: <GrCompliance className="text-blue-500" />,
  },
  {
    value: "10",
    label: "Лет в профессии",
    icon: <LuUserCheck className="text-orange-500" />,
  },
  {
    value: "11",
    label: "Месяцев гарантии",
    icon: <AiOutlineFileProtect className="text-green-500" />,
  },
  {
    value: "4.9",
    label: "Высокая оценка клиентов",
    icon: <GoStar className="text-yellow-500" />,
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
