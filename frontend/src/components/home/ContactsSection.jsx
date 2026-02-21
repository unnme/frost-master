import { GoogleMap } from "./contactsSection/GoogleMap";
import { SectionBackground } from "@components/common/SectionBackground";

export const ContactsSection = () => {
	return (
		<section id="contacts">
			<div className="relative">
				<SectionBackground />
				<div className="p-6 md:px-8">
					<GoogleMap />
				</div>
			</div>
		</section>
	);
};
