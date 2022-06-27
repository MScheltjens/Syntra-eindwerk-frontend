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
      divider={<StackDivider borderColor="#fda94a" />}
      spacing={2}
      align="stretch"
    >
      {dogExercises.map((dogExe) => (
        <Flex key={dogExe.id} justify="space-between" rounded="md">
          <Flex flexDir="column" justify="space-around">
            <Heading size="sm" pl="20px">
              {dogExe.exercise.name}
            </Heading>
            <Text size="sm" pl="20px">
              {dogExe.startDate} - {dogExe.endDate}
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
