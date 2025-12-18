import { BsFillClipboard2CheckFill, BsGearFill } from "react-icons/bs";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";

import { useInViewOnce } from "@hooks/useInViewOnce";

// ------------------------
//         DATA
// ------------------------
const steps = [
  {
    id: 1,
    title: "Заполнение заявки",
    time: "2 МИН",
    icon: BsFillClipboard2CheckFill,
    description:
      "Вы оставляете заявку через сайт или звоните — я перезваниваю в ближайшее время.",
  },
  {
    id: 2,
    title: "Телефонная\nконсультация",
    time: "5 МИН",
    icon: GiTalk,
    description:
      "Уточняю проблему, задаю вопросы и предварительно определяю характер поломки.",
  },
  {
    id: 3,
    title: "Мастер приезжает\nна дом",
    time: "~60 МИН",
    icon: FaTruckFast,
    description:
      "Приезжаю в оговорённое время, привожу инструменты и необходимые материалы.",
  },
  {
    id: 4,
    title: "Диагностика",
    time: "10 МИН",
    icon: BsGearFill,
    description:
      "Провожу точную диагностику техники и определяю окончательную стоимость ремонта.",
  },
  {
    id: 5,
    title: "Ремонт",
    time: "10–60 МИН",
    icon: HiMiniWrenchScrewdriver,
    description:
      "Выполняю ремонт на месте, предоставляю гарантию на выполненные работы.",
  },
];

// ------------------------
//        STEP UNIT
// ------------------------
export const StepUnit = ({ step, index, visible }) => {
  const Icon = step.icon;

  return (
    <div
      className={`group relative flex min-h-20 min-w-4/5 flex-col justify-center rounded-4xl rounded-tr-none border-2 border-main-dark/30 bg-main-light shadow-sm duration-500 ease-out sm:min-w-5/7 md:min-w-70 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 0.25}s` }}
    >
      {/* Left number badge */}
      <div className="absolute -bottom-3 -left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-dark/30 bg-main-light text-xl font-extrabold text-main-dark/60 transition-all duration-300 group-hover:scale-105">
        {index + 1}
      </div>

      {/* Icon + Title */}
      <div className="z-10 mx-auto flex items-center gap-3 px-8 md:mx-0">
        <div className="flex h-10 w-10 items-center justify-center">
          <Icon className="h-9 w-9 text-main-dark/70" />
        </div>

        {/* Step title */}
        <div className="text-md text-left leading-tight font-semibold whitespace-pre-line text-main-dark/80">
          {step.title}
        </div>
      </div>

      {/* Time badge */}
      <div className="text-md absolute -top-3 -right-4 z-20 rounded-sm bg-main-orange px-2.5 font-semibold text-main-light transition-transform duration-300 group-hover:scale-105">
        {step.time}
      </div>
    </div>
  );
};

// ------------------------
//        STEP GROUP
// ------------------------
export const StepList = () => {
  const [ref, visible] = useInViewOnce();

  return (
    <div
      ref={ref}
      className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-1"
    >
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex flex-col items-center gap-6 lg:flex-row ${
            index === steps.length - 1
              ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-start"
              : ""
          }`}
        >
          {/* Step card */}
          <StepUnit
            step={step}
            index={index}
            visible={visible}
          />

          {/* Step description */}
          <div className="max-w-xs text-center text-sm leading-tight text-main-dark/80 lg:text-left">
            {step.description}
          </div>
        </div>
      ))}
    </div>
  );
};
