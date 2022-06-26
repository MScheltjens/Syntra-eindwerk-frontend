import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import CloudinarySDK from "../../components/cloudinarySDK/CloudinarySDK";
import { scale } from "@cloudinary/url-gen/actions/resize";

const DogCard = ({ dogPhoto, dogExe, name }) => {
  return (
    <Box
      maxW="sm"
      maxH="lg"
      border="2px solid #fda94a"
      rounded="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="#04abab"
      _hover={{
        bg: "#fda94a",
        color: " white",
      }}
    >
      <Box borderBottom="2px solid #fda94a">
        <CloudinarySDK publicId={dogPhoto} />
      </Box>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Heading as="h3">{name}</Heading>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        ></Box>
      </Box>
    </Box>
  );
};

export default DogCard;
