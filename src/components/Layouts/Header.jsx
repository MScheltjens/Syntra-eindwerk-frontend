import { Center, Box, Icon, Img, Flex } from "@chakra-ui/react";
import CloudinaryImg from "../cloudinarySDK/CloudinarySDK";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Box bgGradient="linear(to-r, #108dc7, #ef8e38)">
        <Flex
          color="white"
          height="15vh"
          borderBottom="2px solid #ff8802"
          alignItems="center"
        >
          <CloudinaryImg
            publicId="doerqp61nrttqopvfabm"
            width={500}
            height={200}
          />
          <Icon as={FaPaw} boxSize="50px" color="#F18F01" />
        </Flex>
      </Box>
    </>
  );
};

export default Header;
