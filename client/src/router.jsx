import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import LoginUser from "./views/Login-user";
import LoginAdmin from "./views/Login-admin";
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
    path: "/login-user",
    element: <LoginUser />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/form-biodata",
    element: <FormBiodata />,
  },
]);
