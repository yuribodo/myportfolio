import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sobre from './Pages/Sobre.tsx'
import Trabalhos from './Pages/Trabalhos.tsx'
import Layout from './Components/Layout.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/sobre",
    element: (
      <Layout>
        <Sobre />
      </Layout>
    ),
  },
  {
    path: "/trabalhos",
    element: (
      <Layout>
        <Trabalhos />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
