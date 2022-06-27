import {
  VStack,
  Flex,
  Heading,
  Box,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import DogRadialBar from "./DogRadialBar";
import DogChartModal from "./DogChartModal";

const DogGridExerciseList = ({ dogExercises }) => {
  return (
    <VStack
      divider={<StackDivider borderColor="orange.300" />}
      spacing={2}
      align="stretch"
      color="orange.300"
    >
      {dogExercises.map((dogExe) => (
        <Flex key={dogExe.id} justify="space-between" rounded="md">
          <Flex flexDir="column" justify="space-around" width="250px">
            <Heading size="lg" pl="20px">
              {dogExe.exercise.name}
            </Heading>
            <Text size="sm" pl="20px">
              From {dogExe.startDate} to {dogExe.endDate}
            </Text>
          </Flex>
          <Box>
            <DogRadialBar dogExe={dogExe} />
          </Box>
          <DogChartModal dogExe={dogExe} />
        </Flex>
      ))}
    </VStack>
  );
};

export default DogGridExerciseList;
