import { ShieldCheck, Stethoscope, Package, Zap } from "lucide-react";

export const GUARANTEES = [
  {
    icon: ShieldCheck,
    iconCls: "text-accent-green",
    value: "11 месяцев",
    label: "Гарантия на все виды работ и установленные запчасти",
  },
  {
    icon: Stethoscope,
    iconCls: "text-accent-blue",
    value: "Диагностика",
    label: "При заказе ремонта диагностика в подарок",
  },
  {
    icon: Package,
    iconCls: "text-accent-yellow",
    value: "Запчасти",
    label: "Напрямую от официальных поставщиков",
  },
  {
    icon: Zap,
    iconCls: "text-main-orange",
    value: "День в день",
    label: "Выезд мастера в удобное для вас время",
  },
];
