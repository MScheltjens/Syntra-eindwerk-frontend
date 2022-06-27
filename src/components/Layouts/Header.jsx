import { Center, Box, Icon, Img, Flex } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Box bgGradient="linear(to-r, #108dc7, #ef8e38)">
        <Flex
          h="100px"
          color="white"
          height="15vh"
          borderBottom="2px solid #ff8802"
          alignItems="center"
        >
          <Img src="src/assets/doggotransparent.png"></Img>
          <Icon as={FaPaw} boxSize="50px" color="#F18F01" />
        </Flex>
      </Box>
    </>
  );
};

export default Header;
