import {
  VStack,
  Flex,
  Heading,
  Box,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import DogBarChart from "./DogBarChart";
import DogRadialBar from "./DogRadialBar";
import DogBarChartModal from "./DogBarChartModal";

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
          <DogBarChartModal />
        </Flex>
      ))}
    </VStack>
  );
};

export default DogGridExerciseList;
