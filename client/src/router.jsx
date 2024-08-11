import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import RegisterUser from "./views/Register-user";
import RegisterAdmin from "./views/RegisterAdmin";
import FormBiodata from "./views/FormBiodata";
import DatabaseUser from "./views/DatabaseUser";
import DataById from "./views/DataById";
import Layout from "./views/Layout";
import EditByIdAdmin from "./views/EditById-admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register-user",
    loader: () =>
      localStorage.getItem("access_token") && redirect("/login"),
    element: <RegisterUser />,
  },
  {
    path: "/register-admin",
    loader: () =>
      localStorage.getItem("access_token") && redirect("/login"),
    element: <RegisterAdmin />,
  },
  {
    path: "/login",
    loader: () =>
      localStorage.getItem("access_token") && redirect("/admin/database"),
    element: <Login />,
  },
  {
    path: "/form-biodata",
    element: <FormBiodata />,
  },

  {
    element: <Layout />,
    loader: () => !localStorage.getItem("access_token") && redirect("/admin/database"),
    children: [
      {
        path: "/admin/database",
        element: <DatabaseUser />,
      },
      {
        path: "/admin/database/:id",
        element: <DataById />,
      },
      {
        path: "/admin/database/edit/:id",
        element: <EditByIdAdmin />,
      },
    ],
  },
]);
