export const formatPhone = (digits) => {
  digits = digits.slice(0, 11);

  const p1 = digits.substring(1, 4);
  const p2 = digits.substring(4, 7);
  const p3 = digits.substring(7, 9);
  const p4 = digits.substring(9, 11);

  let formatted = "+7";
  if (p1) formatted += ` ${p1}`;
  if (p2) formatted += ` ${p2}`;
  if (p3) formatted += ` ${p3}`;
  if (p4) formatted += ` ${p4}`;

  return formatted;
};

export const validateForm = (form) => {
  const digits = form.phone.replace(/\D/g, "");

  return {
    name: form.name.trim().length < 2,
    phone: digits.length < 11,
    agreed: !form.agreed,
  };
};

export const formPoints = [
  {
    title: "Перезвоним в течение 15 минут",
    description: "ответим на все ваши вопросы",
  },
  { title: "Проанализируем поломку", description: "подберем метод устранения" },
  {
    title: "Сориентируем по стоимости",
    description: "предварительно рассчитаем стоимость ремонта",
  },
  {
    title: "Дадим рекомендации",
    description: "относительно ремонта и пользования оборудованием",
  },
];
