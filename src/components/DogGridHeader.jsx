import { Box, Heading } from "@chakra-ui/react";

const DogGridHeader = ({ name, birthDate }) => {
  return (
    <Box>
      <Heading>{name}</Heading>
      <Heading size="sm">{birthDate}</Heading>
    </Box>
  );
};

export default DogGridHeader;
