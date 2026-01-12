import { IoIosTimer } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LiaMapMarkedAltSolid } from "react-icons/lia";

const FEATURES = [
  {
    icon: <IoIosTimer className="h-8 w-8 text-main-dark" />,
    title: "Оперативный выезд мастера",
  },
  {
    icon: <AiOutlineFileProtect className="h-8 w-8 text-main-dark" />,
    title: "Гарантия на все работы",
  },
  {
    icon: <LiaMapMarkedAltSolid className="h-9 w-9 text-main-dark" />,
    title: "Выезд по городу и области",
  },
];

export const FeaturesBar = () => (
  <div className="relative overflow-hidden">
    <div className="block md:hidden">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {FEATURES.concat(FEATURES).map((val, indx) => (
          <div
            key={indx}
            className="flex shrink-0 items-center justify-center gap-3"
          >
            {val.icon}
            <p className="text-md bg-yellow-400/60 px-0.5 font-semibold text-main-dark">
              {val.title}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="hidden flex-row justify-between md:flex">
      {FEATURES.map((val, indx) => (
        <div
          key={indx}
          className="flex items-center justify-center gap-3"
        >
          {val.icon}
          <p className="text-md bg-yellow-400/60 px-0.5 font-semibold text-main-dark">
            {val.title}
          </p>
        </div>
      ))}
    </div>
  </div>
);
