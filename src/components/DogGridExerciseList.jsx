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
      p="20px"
      divider={<StackDivider borderColor="#fda94a" />}
      spacing={2}
      align="stretch"
    >
      {/* <p>{JSON.stringify(dogExercises)}</p> */}
      {dogExercises.map((dogExe) => (
        <Flex key={dogExe.id} justify="space-around" rounded="md">
          <Flex flexDir="column" justify="space-around">
            <Heading size="sm">{dogExe.exercise.name}</Heading>
            <Text size="sm">
              {dogExe.startDate} - {dogExe.endDate}
            </Text>
            {/* {JSON.stringify(dogExe)} */}
          </Flex>
          <Box>
            <DogRadialBar dogExe={dogExe} />
            {/* <DogBarChart /> */}
          </Box>
          <DogChartModal dogExe={dogExe} />
        </Flex>
      ))}
    </VStack>
  );
};

export default DogGridExerciseList;
