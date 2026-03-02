import { Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@config/siteConfig";
import { YandexMap } from "./contactsSection/YandexMap";
import { SectionBackground } from "@components/common/SectionBackground";
import maxIcon from "@images/max-messenger.svg";

const { phone, email, hours, telHref, telegramUrl, maxUrl } = SITE_CONFIG.contacts;

export const ContactsSection = () => {
	return (
		<section id="contacts">
			<div className="relative">
				<SectionBackground />
				<div className="p-6 md:px-8">
	<div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">

						<div className="lg:w-72 xl:w-80 shrink-0 flex flex-col justify-center gap-5 bg-main-light rounded-2xl border border-main-dark/8 shadow-md px-5 py-6">
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
										<span className="text-xs text-main-dark/40 mb-0">Телефон</span>
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
										<span className="text-xs text-main-dark/40 mb-0">Email</span>
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
										<svg className="h-4 w-4 text-main-dark/60" viewBox="0 0 24 24" fill="currentColor">
											<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
										</svg>
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0">Telegram</span>
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
										<img src={maxIcon} alt="" className="h-4 w-4 grayscale opacity-60" />
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0">Messenger Max</span>
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

								<li className="flex items-center gap-3 text-sm text-main-dark/80">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-main-dark/5">
										<Clock className="h-4 w-4 text-main-dark/60" />
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-main-dark/40 mb-0">Режим работы</span>
										<time dateTime="Mo-Su 08:00-22:00" className="font-medium text-main-dark">
											{hours}
										</time>
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
