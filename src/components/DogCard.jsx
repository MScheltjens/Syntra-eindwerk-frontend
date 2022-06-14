import React from "react";
import {
  Box,
  Image,
  Badge,
  AspectRatio,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react";
import Exercises from "./Exercises";

const DogCard = ({ dogPhoto, dogExe, name }) => {
  return (
    <Box
      maxW="sm"
      maxH="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      {/* <AspectRatio w="400px" ratio={4 / 3}> */}
      <Image src={dogPhoto} alt={dogPhoto} boxSize="200px" objectFit="cover" />
      {/* </AspectRatio> */}
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
        >
          <Text>Exercises: {dogExe}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DogCard;
