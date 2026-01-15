import { GMap } from "./contactsSection/GMap";
import { SectionBackground } from "@components/common/SectionBackground";

export const ContactsSection = () => {
	return (
		<section id="contacts">
			<div className="relative">
				<SectionBackground />
				<div className="p-6">
					<GMap />
				</div>
			</div>
		</section>
	);
};
