import { GoogleMap } from "./contactsSection/GoogleMap";
import { ContactCard } from "./contactsSection/ContactCard";
import { SectionBackground } from "@components/common/SectionBackground";

export const ContactsSection = () => {
	return (
		<section id="contacts">
			<div className="relative">
				<SectionBackground />
				<div className="p-6 md:px-8">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
						<div className="lg:w-72 xl:w-80 shrink-0">
							<ContactCard className="h-full" />
						</div>
						<div className="flex-1">
							<GoogleMap />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
