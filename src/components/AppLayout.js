import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
