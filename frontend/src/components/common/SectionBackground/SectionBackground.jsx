import { cn } from "@utils/cn";

/**
 * Reusable section background component
 * @param {Object} props
 * @param {string} props.className - Additional classes
 * @param {string} props.variant - Background variant: 'default' | 'left' | 'right' | 'full'
 */
export const SectionBackground = ({ className, variant = "default" }) => {
	const baseClasses = "pointer-events-none absolute inset-0 -z-1 border border-main-dark/5 bg-main-dark/5";

	const variantClasses = {
		default: "",
		left: "md:ml-6 md:block md:rounded-l-4xl",
		right: "md:mr-6 md:block md:rounded-r-4xl",
		full: "",
	};

	return (
		<div
			className={cn(baseClasses, variantClasses[variant], className)}
		/>
	);
};
