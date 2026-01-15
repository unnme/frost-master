import { Loading } from "@pages/system/Loading.jsx";
import { Router } from "@general/Router.jsx";
import { useSendClientInfo } from "@hooks/useSendClientInfo";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  useSendClientInfo();

  return (
    <BrowserRouter>
			<Suspense fallback={<Loading name="suspense" />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};
