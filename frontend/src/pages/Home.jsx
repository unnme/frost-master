import {
	HeroSection,
	AboutSection,
	ContactsSection,
} from "@components/sections/home";
import { SeoHead } from "@components/common/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead canonical="/" />
      <div className="space-y-12">
        <HeroSection />
        <AboutSection />
        <ContactsSection />
      </div>
    </>
  );
}
