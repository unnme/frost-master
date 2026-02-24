import { Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@config/siteConfig";
import { YandexMap } from "./contactsSection/YandexMap";
import { SectionBackground } from "@components/common/SectionBackground";
import maxIcon from "@images/max-messenger.svg";

const { phone, email, hours, telHref, telegramUrl, whatsappUrl, maxUrl } = SITE_CONFIG.contacts;

export const ContactsSection = () => {
	return (
		<section id="contacts">
			<div className="relative">
				<SectionBackground />
				<div className="p-6 md:px-8">
	<div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">

						<div className="lg:w-72 xl:w-80 shrink-0 flex flex-col justify-center gap-5 bg-main-light rounded-2xl border border-main-dark/8 shadow-sm px-5 py-6">
							<div>
								<div className="flex items-center gap-3">
									<h2 className="shrink-0 text-2xl font-extrabold">
										<span className="text-brand-frost">Frost</span>
										<span className="text-main-orange/90">Master</span>
									</h2>
									<span className="h-px flex-1 bg-main-dark/15" />
								</div>
								<p className="mt-1 text-sm font-semibold text-main-dark/60">
									Свяжитесь с нами
								</p>
							</div>

							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1">
								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<Phone className="h-4 w-4 text-main-dark/60" />
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0.5">Телефон</span>
										<a
											href={telHref}
											className="font-medium text-main-dark transition-colors hover:text-main-orange"
										>
											{phone}
										</a>
									</div>
								</li>

								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<Mail className="h-4 w-4 text-main-dark/60" />
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0.5">Email</span>
										<a
											href={`mailto:${email}`}
											className="break-all font-medium text-main-dark transition-colors hover:text-main-orange"
										>
											{email}
										</a>
									</div>
								</li>


								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<Clock className="h-4 w-4 text-main-dark/60" />
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0.5">Режим работы</span>
										<time dateTime="Mo-Su 08:00-22:00" className="font-medium text-main-dark">
											{hours}
										</time>
									</div>
								</li>

								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<svg className="h-4 w-4 text-main-dark/60" viewBox="0 0 24 24" fill="currentColor">
											<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
										</svg>
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0.5">Telegram</span>
										<a
											href={telegramUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-main-dark transition-colors hover:text-main-orange"
										>
											t.me/frost_master_krd
										</a>
									</div>
								</li>

								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<svg className="h-4 w-4 text-main-dark/60" viewBox="0 0 24 24" fill="currentColor">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
										</svg>
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0.5">WhatsApp</span>
										<a
											href={whatsappUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-main-dark transition-colors hover:text-main-orange"
										>
											wa.me/79934433956
										</a>
									</div>
								</li>

								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<img src={maxIcon} alt="" className="h-4 w-4 grayscale opacity-60" />
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0.5">Messenger Max</span>
										<a
											href={maxUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-main-dark transition-colors hover:text-main-orange"
										>
											frost_master_krd
										</a>
									</div>
								</li>
							</ul>
						</div>

						<div className="flex-1 self-stretch">
							<YandexMap />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
