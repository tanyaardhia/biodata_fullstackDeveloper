import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
