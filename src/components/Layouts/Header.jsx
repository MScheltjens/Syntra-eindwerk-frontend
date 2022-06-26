import { Center, Box, Icon, Img, Flex } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  return (
    <Flex
      bg="#048387"
      h="100px"
      color="white"
      height="15vh"
      borderBottom="5px solid #ff8802"
      alignItems="center"
    >
      <Img src="src/assets/doggotransparent.png"></Img>
      <Icon as={FaPaw} boxSize="50px" color="#ff8802" />
    </Flex>
  );
};

export default Header;
