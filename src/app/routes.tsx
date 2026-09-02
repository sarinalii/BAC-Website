import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { FreshmanLiaison } from "./pages/programs/FreshmanLiaison";
import { InsightTeam } from "./pages/programs/InsightTeam";
import { QuantTeam } from "./pages/programs/QuantTeam";
import { MLTeam } from "./pages/programs/MLTeam";
import { OurTeam } from "./pages/OurTeam";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "programs/freshman-liaison", Component: FreshmanLiaison },
      { path: "programs/insight-team", Component: InsightTeam },
      { path: "programs/quant-team", Component: QuantTeam },
      { path: "programs/ml-team", Component: MLTeam },
      { path: "our-team", Component: OurTeam },
      { path: "contact", Component: Home },
      { path: "*", Component: NotFound },
    ],
  },
]);
