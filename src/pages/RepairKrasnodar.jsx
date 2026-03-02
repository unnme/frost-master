import { SeoHead } from "@components/common/SeoHead";
import { StructuredData } from "@components/common/StructuredData";
import { AboutSection, ContactsSection, HeroSection } from "@components/home";
import { GEO_PAGES } from "@config/geoPages";

const page = GEO_PAGES.krasnodar;

export default function RepairKrasnodar() {
  return (
    <>
      <SeoHead
        title={page.title}
        description={page.description}
        canonical={page.canonical}
      />
      <StructuredData pageType="geo" canonical={page.canonical} />
      <div className="space-y-12">
        <HeroSection heading={page.heading} />
        <AboutSection />
        <ContactsSection />
      </div>
    </>
  );
}
