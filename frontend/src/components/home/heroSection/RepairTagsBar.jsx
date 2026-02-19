import { REPAIR_TAGS } from "@config/repairTags";

export const RepairTagsBar = () => {
  return (
    <div className="relative right-1/2 left-1/2 min-w-7xl -translate-x-1/2 overflow-hidden">
      <div className="animate-marquee flex gap-10 whitespace-nowrap">
        {[...REPAIR_TAGS, ...REPAIR_TAGS].map((tag, i) => (
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
