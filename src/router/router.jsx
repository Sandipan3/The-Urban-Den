import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout";
import PageWrapper from "../components/PageWrapper";
import Spinner from "../components/Spinner";

// Lazy imports
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Spinner />}>
            <PageWrapper>
              <Products />
            </PageWrapper>
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Spinner />}>
            <PageWrapper>
              <About />
            </PageWrapper>
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Spinner />}>
            <PageWrapper>
              <Contact />
            </PageWrapper>
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <div className="p-10 text-center">404 - Page not found!</div>,
  },
]);

export default router;
