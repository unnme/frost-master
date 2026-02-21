import { Loading } from "@pages/system/Loading.jsx";
import { Router } from "@general/Router.jsx";
import { useSendClientInfo } from "@hooks/useSendClientInfo";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

export const App = () => {
  useSendClientInfo();

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
    </BrowserRouter>
  );
};
