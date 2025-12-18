import clsx from "clsx";
import { ErrorBoundary } from "react-error-boundary";

import { useScrollDirection } from "@hooks/useScrollDirection";

import { ErrorFallback } from "@pages/system/ErrorFallback.jsx";

import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { ParticlesWrapper } from "@components/ParticlesWrapper";

export const Layout = ({ children }) => {
  const isVisible = useScrollDirection();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ParticlesWrapper />

      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <header
          className={clsx(
            "fixed top-0 right-0 left-0 z-10 mx-auto max-w-7xl transition-transform duration-300",
            { "-translate-y-20": !isVisible },
          )}
        >
          <Navbar />
        </header>

        {/* Content */}
        <div className="mt-[calc(var(--navbar-height)+1rem)] min-h-[calc(100vh-var(--navbar-height)-1rem)]">
          <div className="overflow-hidden border-main-dark/10 bg-main-dark/10 backdrop-blur md:border lg:rounded-2xl">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};
