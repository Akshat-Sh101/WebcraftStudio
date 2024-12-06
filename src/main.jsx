import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import Samplepage from './components/Samplepage.jsx'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/WebcraftStudio/",
    element: <Layout/>,
    children:[
      {
        path:"/WebcraftStudio/",
        element:<App />
      },
      {
        path:"/WebcraftStudio/Sample",
        element: <Samplepage/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
