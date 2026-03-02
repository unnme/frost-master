import { SeoHead } from "@components/common/SeoHead";
import { StructuredData } from "@components/common/StructuredData";
import { AboutSection, ContactsSection, HeroSection } from "@components/home";

export default function Home() {
  return (
    <>
      <SeoHead canonical="/" />
      <StructuredData />
<HeroSection />
      <AboutSection />
      <ContactsSection />
    </>
  );
}
