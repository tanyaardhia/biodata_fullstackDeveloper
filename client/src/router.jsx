import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import RegisterUser from "./views/Register-user";
import RegisterAdmin from "./views/RegisterAdmin";
import FormBiodata from "./views/FormBiodata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register-user",
    element: <RegisterUser />,
  },
  {
    path: "/register-admin",
    element: <RegisterAdmin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/form-biodata",
    element: <FormBiodata />,
  },
]);
