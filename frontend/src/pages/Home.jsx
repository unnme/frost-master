import { SeoHead } from "@components/common/SeoHead";
import { StructuredData } from "@components/common/StructuredData";
import { AboutSection, ContactsSection, HeroSection } from "@components/home";

export default function Home() {
  return (
    <>
      <SeoHead canonical="/" />
      <StructuredData />
      {/* Hidden text for search engines to use as description */}
      <div className="sr-only">
        <p>
          Frost-Master — профессиональный ремонт холодильников в Краснодаре и
          Адыгее. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт.
          Телефон: +7 (927) 918-88-18. Ежедневно с 8:00 до 22:00. Гарантия 3-12
          месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant,
          Beko, Haier и другие.
        </p>
      </div>
      <div className="space-y-12">
        <HeroSection />
        <AboutSection />
        <ContactsSection />
      </div>
    </>
  );
}
