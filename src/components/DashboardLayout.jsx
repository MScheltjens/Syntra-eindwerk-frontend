import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Flex, Box, Spacer } from "@chakra-ui/react";
const DashboardLayout = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flexGrow={2} h="80vh" bg="#b6e0ec">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
