import { useState } from "react";

/**
 * Hook for submitting callback requests with FastAPI error handling
 * @returns {Object} - { submitRequest, loading, error, success, reset }
 */
export const useCallbackRequest = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const submitRequest = async (data) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const res = await fetch("/api/callback-requests", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			// Parse JSON response (FastAPI returns JSON even on errors)
			let responseData;
			try {
				responseData = await res.json();
			} catch {
				// Critical error if not JSON
				throw new Error("Ошибка сервера. Попробуйте позже.");
			}

			if (!res.ok) {
				// Handle different FastAPI error types
				if (res.status === 422) {
					// Pydantic validation error
					const validationErrors = parseValidationErrors(responseData);
					throw new ValidationError("Ошибка валидации", validationErrors);
				}

				if (res.status === 429) {
					// Rate limit exceeded
					throw new Error(
						"Слишком много запросов. Пожалуйста, подождите минуту.",
					);
				}

				if (res.status === 500) {
					throw new Error(
						responseData.detail || "Ошибка сервера. Попробуйте позже.",
					);
				}

				// General error
				throw new Error(
					responseData.detail || `Ошибка: ${res.statusText}`,
				);
			}

			// Success
			setSuccess(true);
			return responseData;
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		submitRequest,
		loading,
		error,
		success,
		reset: () => {
			setError(null);
			setSuccess(false);
		},
	};
};

/**
 * Parse FastAPI/Pydantic validation errors
 * Format: { detail: [{ loc: ["field"], msg: "message", type: "..." }] }
 */
const parseValidationErrors = (responseData) => {
	if (!responseData.detail || !Array.isArray(responseData.detail)) {
		return {};
	}

	const errors = {};
	responseData.detail.forEach((error) => {
		const field = error.loc?.[error.loc.length - 1]; // Last path element
		if (field) {
			errors[field] = error.msg || "Ошибка валидации";
		}
	});

	return errors;
};

/**
 * Custom validation error class
 */
export class ValidationError extends Error {
	constructor(message, validationErrors) {
		super(message);
		this.name = "ValidationError";
		this.validationErrors = validationErrors;
	}
}

