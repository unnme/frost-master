import { Loading } from "@pages/system/Loading.jsx";
import { Router } from "@general/Router.jsx";
import { useSendClientInfo } from "@hooks/useSendClientInfo";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { OfflineModal, useAutoOfflineModal } from "@components/common/OfflineModal";

export const App = () => {
  useSendClientInfo();
  const { isOpen: offlineOpen, close: closeOffline, forceOpen: openOffline } = useAutoOfflineModal();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading name="suspense" />}>
        <Router />
      </Suspense>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#f7f6f1",
            color: "#525252",
            border: "1px solid rgba(82, 82, 82, 0.1)",
          },
        }}
      />
      {offlineOpen && <OfflineModal onClose={closeOffline} />}
      {import.meta.env.DEV && (
        <button
          onClick={openOffline}
          title="[DEV] Открыть OfflineModal"
          className="fixed bottom-4 left-4 z-40 rounded-full bg-main-dark px-3 py-1.5 text-xs font-bold text-main-light opacity-60 hover:opacity-100"
        >
          offline?
        </button>
      )}
    </BrowserRouter>
  );
};
