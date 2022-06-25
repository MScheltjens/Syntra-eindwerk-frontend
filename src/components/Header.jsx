import React from "react";
import { Center, Box, Icon } from "@chakra-ui/react";
import Logo from "./logoComponent/Logo";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  return (
    <Center
      bg="#048387"
      h="100px"
      color="white"
      height="15vh"
      borderBottom="5px solid #ff8802"
    >
      <Icon as={FaPaw} boxSize="50px" color="#ff8802" />
    </Center>
  );
};

export default Header;
