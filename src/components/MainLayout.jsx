import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

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
