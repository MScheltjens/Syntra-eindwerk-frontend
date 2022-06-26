import { Outlet } from "react-router";
import Sidebar from "../SideNavigation/Sidebar";
import { Flex, Box } from "@chakra-ui/react";
const DashboardLayout = () => {
  return (
    <Flex>
      <Sidebar />
      <Box h="80vh" bg="fff">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
