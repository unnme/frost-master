import {
	HeroSection,
	AboutSection,
	ContactsSection,
} from "@components/sections/home";
import { SeoHead } from "@components/common/SeoHead";
import { StructuredData } from "@components/common/StructuredData";

export default function Home() {
	return (
		<>
			<SeoHead canonical="/" />
			<StructuredData />
			<div className="space-y-12">
				<HeroSection />
				<AboutSection />
				<ContactsSection />
			</div>
		</>
	);
}
