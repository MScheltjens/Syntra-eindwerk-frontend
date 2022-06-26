import { Outlet } from "react-router";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
