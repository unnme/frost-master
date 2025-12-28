import { RoutePaths } from "@general/RoutePaths.jsx";
import { useNavigate } from "react-router-dom";
import { SeoHead } from "@components/common/SeoHead";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="404 — Страница не найдена | FrostMaster"
        description="Страница не найдена. Вернитесь на главную страницу FrostMaster - ремонт холодильников в Краснодаре и Адыгее."
        canonical="/404"
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-main-dark/5 px-4 text-center text-main-dark">
      <h1 className="text-[120px] leading-none font-extrabold tracking-tight lg:text-[160px]">
        404
      </h1>

      <h2 className="mb-2 text-xl font-semibold">Страница не найдена</h2>

      <p className="mb-6 text-sm text-main-dark/70">
        Возможно, вы ошиблись в адресе или эта страница была удалена.
      </p>

      <button
        onClick={() => navigate(RoutePaths.HOME)}
        type="button"
        className="rounded-xl bg-main-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-main-orange/90"
      >
        На главную
      </button>
    </div>
    </>
  );
}
