import { GoStarFill } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Геннадий Нефёдов",
    date: "2 месяца назад",
    text: "Большое спасибо Александру — мастер от бога.",
  },
  {
    name: "Alena Malena",
    date: "7 месяцев назад",
    text: "Все отлично. Мастер приехал через пару часов, поменял деталь в холодильнике, дал рекомендации.",
  },
  {
    name: "Ирина Сай",
    date: "год назад",
    text: "Большое спасибо мастеру по ремонту холодильников Александру. Приехал быстро, работу выполнил качественно!",
  },
  {
    name: "Qwer Ty",
    date: "год назад",
    text: "Александр, благодарю за профессионализм и быстро выполненную работу. Буду рекомендовать!",
  },
  {
    name: "Алексей Соколов",
    date: "год назад",
    text: "Очень хороший мастер. Полчаса — и готово. Показал и объяснил проблему. Цены адекватные.",
  },
  {
    name: "Андрей Никоноров",
    date: "год назад",
    text: "Спасибо Александру за помощь. Чувствуется профессионализм и опыт.",
  },
];

export const ReviewsCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12!"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <article className="group flex h-55 flex-col rounded-3xl border border-main-dark/10 bg-main-light p-5 shadow-sm transition hover:shadow-md">
              {/* Header */}
              <div className="mb-3 flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-main-dark/40 bg-main-dark/5 text-xl font-extrabold text-main-dark shadow-md">
                  {review.name[0]?.toUpperCase()}
                </div>

                <div>
                  <div className="gradient-blue-strong text-md rounded-sm px-1 font-semibold text-main-light">
                    {review.name}
                  </div>
                  <div className="text-disabled text-xs">{review.date}</div>
                </div>
              </div>

              {/* Stars — CSS only */}
              <div className="mb-2 flex gap-0.5 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <GoStarFill
                    key={i}
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-115"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="line-clamp-4 text-sm leading-relaxed text-main-dark">
                {review.text}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
