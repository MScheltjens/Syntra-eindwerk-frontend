import { Center, Box, Icon, Img } from "@chakra-ui/react";
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
      <Img src="src/assets/doggotransparent.png"></Img>
    </Center>
  );
};

export default Header;
