import { Box, Heading, Flex } from "@chakra-ui/react";

const DogGridHeader = ({ name, birthDate, users }) => {
  return (
    <Flex justify="space-between" align="center">
      {/* {JSON.stringify(users)} */}
      <Box>
        <Heading>{name}</Heading>
        <Heading size="sm">{birthDate}</Heading>
      </Box>
      <Box>
        {users
          .filter((user) => user.isTrainer === false)
          .map((user) => (
            <Heading>
              {user.name}, {user.firstName}
            </Heading>
          ))}
      </Box>
    </Flex>
  );
};

export default DogGridHeader;
