import ReactLenis from "lenis/react";
import { Loader } from "./components/loader/Loader";
import { FollowCursor } from "./components/cursor/cursor";
import { Nav } from "./components/nav/Nav";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { LoaderProvider } from "./hooks/loader-provider";
import { CursorProvider } from "./hooks/cursor-provider";
import { Index } from "./views";
import { About } from "./views/about";
import { ProjectPage } from "./views/project";
import { Legal } from "./views/legal";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const Layout = () => {
  console.log(
    '  /\\_/\\  (\n ( ^.^ ) _)I ❤️ CATS\n   \\"/  ( \n ( | | )\n(__d b__)'
  );
  return (
    <>
      <ReactLenis root>
        <Loader />
        <FollowCursor />
        <header>
          <Nav />
        </header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoaderProvider>
        <CursorProvider>
          <Layout />
        </CursorProvider>
      </LoaderProvider>
    ),
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works/:projectId",
        element: <ProjectPage />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
