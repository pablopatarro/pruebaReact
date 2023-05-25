
//Para el control de rutas...
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import ErrorPage from "./components/error-page";
import Home from "./routes/home";
import Registro from "./routes/registro";
import Inicio from "./routes/inicio";

//Cada elemento del array es una "página" que se va a cargar.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <Registro/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inicio",
    element: <Inicio/>,
    errorElement: <ErrorPage />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}


