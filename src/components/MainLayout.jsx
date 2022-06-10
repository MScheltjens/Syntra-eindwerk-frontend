import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Box height="80vh">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
