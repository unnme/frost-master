import { Loading } from "@pages/system/Loading.jsx";
import { Router } from "@general/Router.jsx";
import { useSendClientInfo } from "@hooks/useSendClientInfo";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => {
  useSendClientInfo();

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <PageWithHeader>
            <Loading name="suspense" />
          </PageWithHeader>
        }
      >
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};
