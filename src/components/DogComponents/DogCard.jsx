import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import CloudinaryImg from "../../components/cloudinarySDK/CloudinarySDK";

const DogCard = ({ dogPhoto, dogExe, name }) => {
  return (
    <Box
      maxW="sm"
      maxH="lg"
      rounded="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{
        bg: "#fda94a",
        color: " white",
      }}
      // color="orange.300"
    >
      <Box boxShadow="lg">
        <CloudinaryImg publicId={dogPhoto} width={200} height={200} />
      </Box>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Heading as="h3">{name}</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default DogCard;
