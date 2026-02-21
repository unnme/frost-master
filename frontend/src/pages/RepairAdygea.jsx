import { SeoHead } from "@components/common/SeoHead";
import { AboutSection, ContactsSection, HeroSection } from "@components/home";
import { GEO_PAGES } from "@config/geoPages";

const page = GEO_PAGES.adygea;

export default function RepairAdygea() {
  return (
    <>
      <SeoHead
        title={page.title}
        description={page.description}
        canonical={page.canonical}
      />
      <div className="sr-only">
        <p>{page.srText}</p>
      </div>
      <div className="space-y-12">
        <HeroSection heading={page.heading} />
        <AboutSection />
        <ContactsSection />
      </div>
    </>
  );
}
