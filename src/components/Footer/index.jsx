import { useAtBottom } from "./useAtBottom";

export const Footer = () => {
  const isVisible = useAtBottom(5);

  return (
    <footer
      id="footer"
      className="fixed right-0 bottom-0 left-0 z-50 mx-auto max-w-7xl"
    >
      <div
        className={`transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="border-t-5 border-main-dark/20 bg-main-dark/10 backdrop-blur-sm lg:rounded-t-2xl">
          <div className="flex h-(--footer-height) items-center justify-between px-4 md:px-8">
            <div className="text-sm font-bold text-main-dark/80">
              FrostMaster © {new Date().getFullYear()}
            </div>

            <nav>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="/privacy"
                  className="font-semibold text-main-dark/70 transition-colors hover:text-main-dark"
                >
                  Политика конфиденциальности
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
