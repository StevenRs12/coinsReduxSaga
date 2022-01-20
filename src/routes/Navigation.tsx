import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header/Header";
import { Loader } from "../components/Loader";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-layout">
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
