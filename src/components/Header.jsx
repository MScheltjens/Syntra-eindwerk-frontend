import React from "react";
import { Center, Box } from "@chakra-ui/react";
import Logo from "./logoComponent/Logo";

const Header = () => {
  return (
    <Center
      bg="#048387"
      h="100px"
      color="white"
      height="15vh"
      borderBottom="5px solid #ff8802"
    >
      <Box>
        <Logo maxWidth="300px" />
      </Box>
    </Center>
  );
};

export default Header;
