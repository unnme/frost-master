import { ClipboardCheck, MessageCircle, Truck, Cog, Wrench } from "lucide-react";

export const STEPS = [
  {
    id: 1,
    title: "Заполнение заявки",
    time: "2 МИН",
    icon: ClipboardCheck,
    description:
      "Вы оставляете заявку через сайт или звоните — я перезваниваю в ближайшее время.",
  },
  {
    id: 2,
    title: "Телефонная\nконсультация",
    time: "5 МИН",
    icon: MessageCircle,
    description:
      "Уточняю проблему, задаю вопросы и предварительно определяю характер поломки.",
  },
  {
    id: 3,
    title: "Мастер приезжает\nна дом",
    time: "~60 МИН",
    icon: Truck,
    description:
      "Приезжаю в оговорённое время, привожу инструменты и необходимые материалы.",
  },
  {
    id: 4,
    title: "Диагностика",
    time: "10 МИН",
    icon: Cog,
    description:
      "Провожу точную диагностику техники и определяю окончательную стоимость ремонта.",
  },
  {
    id: 5,
    title: "Ремонт",
    time: "10–60 МИН",
    icon: Wrench,
    description:
      "Выполняю ремонт на месте, предоставляю гарантию на выполненные работы.",
  },
];
