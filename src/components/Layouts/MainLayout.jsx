import { Outlet } from "react-router";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { Box } from "@chakra-ui/react";
import { FaBox } from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <Box bg="#FEEBC8" color="orange.300">
      <Header />
      <Box>
        <Outlet />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
