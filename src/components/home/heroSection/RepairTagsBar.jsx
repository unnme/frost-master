const tags = [
  "Витринные холодильники",
  "Холодильники No Frost",
  "Холодильники Side by Side",
  "Холодильники French Door",
  "Винные холодильники",
  "Двухкомпрессорные холодильники",
  "Абсорбционные холодильники",
  "Электрические холодильники",
  "Винные шкафы",
  "Электронные холодильники",
  "Холодильные системы",
  "Холодильные установки",
  "Бытовые холодильники",
  "Торговые холодильники",
  "Промышленные холодильники",
  "Трехкамерные холодильники",
];

export const RepairTagsBar = () => {
  return (
    // Container centered using translate and fixed width
    <div className="relative right-1/2 left-1/2 min-w-7xl -translate-x-1/2 overflow-hidden">
      {/* Scrolling content using CSS animation (marquee effect) */}
      <div className="animate-marquee flex gap-10 whitespace-nowrap">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="text-xl font-semibold text-main-dark/40"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
