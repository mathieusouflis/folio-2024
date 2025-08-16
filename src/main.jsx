import { createRoot } from 'react-dom/client'
import Index from './views/index.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/footer.jsx';
import About from './views/about.jsx';
import Cursor from './components/cursor/cursor.jsx'
import { CursorProvider } from './hooks/cursorProvider.jsx';
import ProjectPage from './views/project.jsx';
import Loader from './components/loader/Loader.jsx';
import { LoaderProvider } from './hooks/loaderProvider.jsx';
import Legal from './views/legal.jsx';
import ReactLenis from 'lenis/react';


const Layout = () => {
  console.log('  /\\_/\\  (\n ( ^.^ ) _)I ❤️ CATS\n   \\"/  ( \n ( | | )\n(__d b__)')
  return (
    <>
      <ReactLenis root>
      <Loader />
      <Cursor />
      <header>
       <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      </ReactLenis>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LoaderProvider>
        <CursorProvider>
          <Layout />
        </CursorProvider>
      </LoaderProvider>
    ),
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/works/:projectId',
        element: <ProjectPage />,
      },
      {
        path: "/legal",
        element: <Legal/>
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
