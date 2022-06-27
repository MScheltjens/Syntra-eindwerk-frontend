import React from "react";
import { Flex, Box, Text, HStack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, #108dc7, #ef8e38)"
      minHeight="50px"
      borderTop="2px solid #ff8802"
      pt="5px"
    >
      <Flex justify="center" alignItems="center" gap="50">
        <Link href="https://github.com/MScheltjens" isExternal>
          <Icon as={FaGithub} color="#ff8802" boxSize="30px" />
        </Link>
        <Link href="https://www.linkedin.com/in/mathias-scheltjens/" isExternal>
          <Icon as={FaLinkedin} color="#ff8802" boxSize="30px" />
        </Link>
        <Link>
          <Icon as={FaFacebook} color="#ff8802" boxSize="30px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
