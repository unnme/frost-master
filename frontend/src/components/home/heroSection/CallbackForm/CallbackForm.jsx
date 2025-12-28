import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";

import { SuccessDialog } from "./SuccessDialog";
import { formatPhone, validateForm } from "./helpers";
import { formPoints } from "./config";
import { useCallbackRequest, ValidationError } from "./useCallbackRequest";

/**
 * Callback form component with FastAPI error handling
 */
export const CallbackForm = () => {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		agreed: false,
		email: "",
	});

	const [errors, setErrors] = useState({
		name: false,
		phone: false,
		agreed: false,
	});

	const [submitted, setSubmitted] = useState(false);
	const [successOpen, setSuccessOpen] = useState(false);
	const [serverError, setServerError] = useState(null);

	const { submitRequest, loading, error, reset } = useCallbackRequest();

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((p) => ({
			...p,
			[name]: type === "checkbox" ? checked : value,
		}));
		// Reset errors on field change
		if (errors[name] !== undefined) {
			setErrors((p) => ({ ...p, [name]: false }));
		}
		setServerError(null);
	};

	const onNameChange = (e) => {
		let val = e.target.value;
		val = val.replace(/[^А-Яа-яЁё]/g, "");
		val = val.slice(0, 12);

		if (val.length > 0) {
			val = val[0].toUpperCase() + val.slice(1).toLowerCase();
		}

		setForm((p) => ({ ...p, name: val }));
		setErrors((p) => ({ ...p, name: false }));
		setServerError(null);
	};

	const onPhoneChange = (e) => {
		let raw = e.target.value.replace(/\D/g, "");
		if (!raw.startsWith("7")) raw = "7";
		raw = raw.slice(0, 11);

		setForm((p) => ({ ...p, phone: formatPhone(raw) }));
		setErrors((p) => ({ ...p, phone: false }));
		setServerError(null);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		setSubmitted(true);
		setServerError(null);
		reset();

		// Honeypot check
		if (form.email || loading) return;

		// Client-side validation
		const validation = validateForm(form);
		setErrors(validation);

		if (Object.values(validation).some(Boolean)) return;

		try {
			await submitRequest({
				name: form.name.trim(),
				phone: form.phone,
			});

			// Success - reset form
			setForm({
				name: "",
				phone: "",
				agreed: false,
				email: "",
			});
			setErrors({
				name: false,
				phone: false,
				agreed: false,
			});
			setSubmitted(false);
			setSuccessOpen(true);
		} catch (err) {
			// Handle FastAPI validation errors
			if (err instanceof ValidationError) {
				// Update field errors based on server response
				const serverErrors = {};
				Object.keys(err.validationErrors).forEach((field) => {
					if (field === "name" || field === "phone") {
						serverErrors[field] = true;
					}
				});
				setErrors((p) => ({ ...p, ...serverErrors }));
				setServerError(err.validationErrors.name || err.validationErrors.phone || err.message);
			} else {
				// General error (rate limit, server error, etc.)
				setServerError(err.message || "Произошла ошибка. Попробуйте позже.");
			}
		}
	};

	return (
		<>
			<div className="gradient-blue-soft rounded-none border border-main-dark/10 px-6 py-6 shadow-md sm:py-8 md:rounded-2xl lg:rounded-none lg:rounded-r-2xl lg:border-l-0">
				<div className="grid items-start gap-10 md:grid-cols-2">
					{/* LEFT SIDE — FORM */}
					<div className="space-y-10">
						<div>
							<h2 className="pb-2 text-4xl leading-tight font-bold">
								Получите бесплатную консультацию
							</h2>
							<p className="text-lg">
								Оставьте свои данные, и мы свяжемся с вами в{" "}
								<span className="bg-main-orange/90 px-1 font-semibold text-main-light">
									индивидуальном
								</span>{" "}
								порядке
							</p>
						</div>

						<form
							onSubmit={onSubmit}
							className="space-y-6"
						>
							{/* HONEYPOT */}
							<input
								type="text"
								name="email"
								value={form.email}
								onChange={onChange}
								autoComplete="off"
								tabIndex="-1"
								className="hidden"
							/>

							{/* Server error message */}
							{serverError && (
								<div className="rounded-xl border border-red-400 bg-red-50 p-3 text-sm text-red-600">
									{serverError}
								</div>
							)}

							{/* NAME FIELD */}
							<div>
								<div
									className={`flex items-center gap-2 rounded-xl border bg-white p-3 ${
										submitted && errors.name
											? "border-red-400"
											: "border-main-dark/20"
									}`}
								>
									<IoPersonCircleOutline className="h-5 w-5 shrink-0 text-text-disabled" />
									<input
										type="text"
										name="name"
										placeholder="Ваше имя"
										value={form.name}
										onChange={onNameChange}
										className="flex-1 bg-transparent placeholder-text-disabled outline-none"
									/>
								</div>
								{submitted && errors.name && (
									<p className="mt-1 text-sm text-red-400">
										Имя должно быть на кириллице, не короче 2 символов
									</p>
								)}
							</div>

							{/* PHONE FIELD */}
							<div>
								<div
									className={`flex items-center gap-2 rounded-xl border bg-white p-3 ${
										submitted && errors.phone
											? "border-red-400"
											: "border-main-dark/20"
									}`}
								>
									<LuPhone className="h-4 w-4 shrink-0 text-text-disabled" />
									<input
										type="tel"
										name="phone"
										value={form.phone}
										placeholder="+7 (927) 918-88-18"
										inputMode="tel"
										className="flex-1 bg-transparent placeholder-text-disabled outline-none"
										onChange={onPhoneChange}
									/>
								</div>
								{submitted && errors.phone && (
									<p className="mt-1 text-sm text-red-400">
										Введите корректный номер телефона
									</p>
								)}
							</div>

							{/* AGREEMENT */}
							<div>
								<div className="flex items-center gap-2 text-sm">
									<input
										id="agree"
										type="checkbox"
										name="agreed"
										checked={form.agreed}
										onChange={onChange}
										className={`h-5 w-5 ${
											submitted && errors.agreed
												? "accent-red-400"
												: "accent-[#405599]"
										}`}
									/>
									<label htmlFor="agree">
										Я соглашаюсь с Политикой конфиденциальности
									</label>
								</div>
								{submitted && errors.agreed && (
									<p className="mt-1 ml-1 text-sm text-red-400">
										Необходимо согласие с политикой
									</p>
								)}
							</div>

							{/* BUTTON */}
							<button
								type="submit"
								disabled={loading}
								className="gradient-blue-strong text-md w-full rounded-2xl py-3 font-bold text-main-light duration-300 hover:scale-102 disabled:cursor-not-allowed disabled:opacity-60"
							>
								{loading ? "Отправка..." : "Получить консультацию"}
							</button>
						</form>
					</div>

					{/* RIGHT SIDE — POINTS */}
					<div className="flex h-full flex-col justify-between gap-4 lg:-mr-12">
						{formPoints.map(({ title, description }, idx) => (
							<div
								key={title}
								className="group pop-in rounded-2xl rounded-tl-none border border-main-dark/10 bg-main-light shadow-sm transition-shadow duration-300 hover:shadow-md"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								<div className="flex items-center gap-4 px-5 py-2">
									<div className="text-7xl font-extrabold text-main-dark/20">
										{idx + 1}
									</div>
									<div className="flex-1">
										<h3 className="mb-1 text-sm font-semibold text-main-dark">
											{title}
										</h3>
										<p className="text-sm text-main-dark/80">{description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<SuccessDialog
				open={successOpen}
				onClose={() => setSuccessOpen(false)}
			/>
		</>
	);
};

