import ariston from "@assets/images/fridge_labels/ariston.png";
import atlant from "@assets/images/fridge_labels/atlant.png";
import bbk from "@assets/images/fridge_labels/bbk.png";
import beko from "@assets/images/fridge_labels/beko.png";
import birusa from "@assets/images/fridge_labels/birusa.png";
import bosh from "@assets/images/fridge_labels/bosh.png";
import candy from "@assets/images/fridge_labels/candy.png";
import gorenje from "@assets/images/fridge_labels/gorenje.png";
import haier from "@assets/images/fridge_labels/haier.png";
import hisense from "@assets/images/fridge_labels/hisense.png";
import hyundai from "@assets/images/fridge_labels/hyundai.png";
import indesit from "@assets/images/fridge_labels/indesit.png";
import kuppersberg from "@assets/images/fridge_labels/kuppersberg.png";
import leran from "@assets/images/fridge_labels/leran.png";
import lg from "@assets/images/fridge_labels/lg.png";
import liebherr from "@assets/images/fridge_labels/liebherr.png";
import maunfeld from "@assets/images/fridge_labels/maunfeld.png";
import midea from "@assets/images/fridge_labels/midea.png";
import miele from "@assets/images/fridge_labels/miele.png";
import mitsubishi from "@assets/images/fridge_labels/mitsubishi.png";
import nordfrost from "@assets/images/fridge_labels/nordfrost.png";
import samsung from "@assets/images/fridge_labels/samsung.png";
import sharp from "@assets/images/fridge_labels/sharp.png";
import siemens from "@assets/images/fridge_labels/siemens.png";
import smeg from "@assets/images/fridge_labels/smeg.png";
import stinol from "@assets/images/fridge_labels/stinol.png";
import vestfrost from "@assets/images/fridge_labels/vestfrost.png";
import wiessgauff from "@assets/images/fridge_labels/wiessgauff.png";

const brands = [
	{ src: ariston, alt: "Ремонт холодильников Ariston", size: "h-8" },
	{ src: atlant, alt: "Ремонт холодильников Atlant", size: "h-5" },
	{ src: bbk, alt: "Ремонт холодильников BBK", size: "h-5" },
	{ src: beko, alt: "Ремонт холодильников Beko", size: "h-4" },
	{ src: birusa, alt: "Ремонт холодильников Birusa", size: "h-6" },
	{ src: bosh, alt: "Ремонт холодильников Bosch", size: "h-7" },
	{ src: candy, alt: "Ремонт холодильников Candy", size: "h-5" },
	{ src: gorenje, alt: "Ремонт холодильников Gorenje", size: "h-7" },
	{ src: haier, alt: "Ремонт холодильников Haier", size: "h-5" },
	{ src: hisense, alt: "Ремонт холодильников Hisense", size: "h-5" },
	{ src: hyundai, alt: "Ремонт холодильников Hyundai", size: "h-4" },
	{ src: indesit, alt: "Ремонт холодильников Indesit", size: "h-6" },
	{ src: kuppersberg, alt: "Ремонт холодильников Kuppersberg", size: "h-4" },
	{ src: leran, alt: "Ремонт холодильников Leran", size: "h-4" },
	{ src: lg, alt: "Ремонт холодильников LG", size: "h-6" },
	{ src: liebherr, alt: "Ремонт холодильников Liebherr", size: "h-4" },
	{ src: maunfeld, alt: "Ремонт холодильников Maunfeld", size: "h-5" },
	{ src: midea, alt: "Ремонт холодильников Midea", size: "h-6" },
	{ src: miele, alt: "Ремонт холодильников Miele", size: "h-4" },
	{ src: mitsubishi, alt: "Ремонт холодильников Mitsubishi", size: "h-6" },
	{ src: nordfrost, alt: "Ремонт холодильников Nordfrost", size: "h-4" },
	{ src: samsung, alt: "Ремонт холодильников Samsung", size: "h-7" },
	{ src: sharp, alt: "Ремонт холодильников Sharp", size: "h-4" },
	{ src: siemens, alt: "Ремонт холодильников Siemens", size: "h-4" },
	{ src: smeg, alt: "Ремонт холодильников Smeg", size: "h-4" },
	{ src: stinol, alt: "Ремонт холодильников Stinol", size: "h-5" },
	{ src: vestfrost, alt: "Ремонт холодильников Vestfrost", size: "h-4" },
	{ src: wiessgauff, alt: "Ремонт холодильников Wiessgauff", size: "h-6" },
];

export const BrandsStrip = () => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-6">
      {brands.map((brand, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center"
        >
          <img
            src={brand.src}
            alt={brand.alt}
            loading="lazy"
            className={`${brand.size} transform object-contain opacity-60 invert transition duration-300 hover:scale-110`}
          />
        </div>
      ))}
    </div>
  );
};
