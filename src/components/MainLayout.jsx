import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
