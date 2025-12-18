import { HeroSection } from "@general/sections/home/HeroSection";
import { AboutSection } from "@general/sections/home/AboutSection";
import { ContactsSection } from "@general/sections/home/ContactsSection";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AboutSection />
      <ContactsSection />
    </div>
  );
}
