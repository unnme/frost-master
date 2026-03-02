import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

// Direct (non-lazy) imports — React.lazy doesn't resolve during renderToString
import Home from "./pages/Home.jsx";
import Privacy from "./pages/Privacy.jsx";
import RepairKrasnodar from "./pages/RepairKrasnodar.jsx";
import RepairAdygea from "./pages/RepairAdygea.jsx";
import NotFound from "./pages/system/NotFound.jsx";
import { Layout } from "./general/Layout.jsx";

const pageMap = {
  "/": Home,
  "/remont-holodilnikov-krasnodar": RepairKrasnodar,
  "/remont-holodilnikov-adygeya": RepairAdygea,
  "/privacy": Privacy,
};

export function render(url) {
  const Page = pageMap[url] || NotFound;
  return renderToString(
    <StaticRouter location={url}>
      <Layout>
        <Page />
      </Layout>
    </StaticRouter>,
  );
}
