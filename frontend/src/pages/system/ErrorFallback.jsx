import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "@general/routePaths.js";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div
      role="alert"
      className="flex h-full flex-col items-center justify-center px-6 py-12"
    >
      {import.meta.env.DEV && (
        <div className="mb-12 w-full max-w-xl rounded-md bg-white p-6 shadow">
          <p className="mb-2 font-bold text-red-600">DEV ONLY!</p>
          <p className="mb-2 font-medium text-gray-900">
            Something went wrong:
          </p>
          <pre className="mb-4 text-sm whitespace-pre-wrap text-gray-700">
            {error.message}
          </pre>
          <button
            onClick={resetErrorBoundary}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      )}

      <div className="flex flex-col items-center space-y-6 text-center">
        <p className="text-xl font-semibold text-gray-800">
          An error happened. Please contact support.
        </p>

        <button
          onClick={() => {
            resetErrorBoundary();
            navigate(ROUTE_PATHS.HOME);
          }}
          className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};
