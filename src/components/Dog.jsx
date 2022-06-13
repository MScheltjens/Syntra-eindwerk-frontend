import {
  Center,
  Heading,
  OrderedList,
  ListItem,
  Box,
  List,
  Button,
  Flex,
  VStack,
  Image,
  Grid,
  GridItem,
  Spacer,
  Spinner,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { useGetDogQuery, useDeleteDogMutation } from "../store/api/apiSlice";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import CreateDogExerciseModal from "./CreateDogExerciseModal";

const Dog = () => {
  const { dogId } = useParams();
  const navigate = useNavigate();

  const {
    data: dog,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDogQuery(dogId);
  const [deleteDog, {}] = useDeleteDogMutation();
  const handleClick = () => {
    deleteDog(dogId);
    navigate(-1);
  };

  return (
    <>
      {isLoading && (
        <Center mt="200px">
          <Spinner />
        </Center>
      )}
      {isSuccess && (
        <Box as="div" p={100}>
          <Grid
            h="500px"
            templateRows="repeat(5, 3fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <GridItem
              rowSpan={1}
              colSpan={6}
              boxShadow="md"
              rounded="md"
              bg="white"
            >
              <Heading>{dog.name}</Heading>
              <Heading size="sm">{dog.birthDate}</Heading>
            </GridItem>
            <GridItem
              rowSpan={4}
              colSpan={2}
              boxShadow="md"
              rounded="md"
              bg="white"
              overflow="hidden"
            >
              <AspectRatio ratio={4 / 3}>
                {dog.photo ? (
                  <Image src={dog.photo} objectFit="cover" />
                ) : (
                  <p>No Image</p>
                )}
              </AspectRatio>
            </GridItem>
            <GridItem
              colSpan={4}
              rowSpan={4}
              h="500px"
              boxShadow="md"
              rounded="md"
              bg="white"
            >
              <VStack spacing="30px" p="20px">
                {dog.dogExercises.map((dogExe) => (
                  <Flex key={dogExe.id} gap="50px">
                    <Flex flexDir="column" justify="space-around">
                      <Heading size="sm">{dogExe.startDate}</Heading>
                      <Heading size="sm">{dogExe.endDate}</Heading>
                    </Flex>
                    <Box w="100px" h="100px" bg="blue"></Box>
                  </Flex>
                ))}
                <CreateDogExerciseModal />
              </VStack>
            </GridItem>
            {/* <GridItem colSpan={4} bg="tomato"></GridItem> */}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Dog;
