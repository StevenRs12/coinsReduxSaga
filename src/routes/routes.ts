import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element
interface Route {
    path: string;
    to: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const InfoCryptos = lazy(() => import("../pages/InfoCryptos/InfoCryptos"));
const DetailsCrypto = lazy(() => import("../pages/DetailsCrypto/DetailsCrypto"));
const HomeSection = lazy(() => import("../pages/HomeSection/HomeSection"));

export const routes: Route[] = [
    {
        path: "home",
        to: "/home",
        Component: HomeSection,
        name: "HomeSection",
    },
    {
        path: "info-crytpos",
        to: "/info-crytpos",
        Component: InfoCryptos,
        name: "InfoCryptos",
    },
    {
        path: "details-crytpo",
        to: "/details-crytpo",
        Component: DetailsCrypto,
        name: "DetailsCrypto",
    },
];
