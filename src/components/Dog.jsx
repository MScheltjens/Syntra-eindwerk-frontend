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
  useDisclosure,
} from "@chakra-ui/react";
import AlertDelete from "./AlertDelete";
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
  const [deleteDog, { data }] = useDeleteDogMutation();
  const handleDelete = async () => {
    await deleteDog(dogId);
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
              <Flex justify="space-between" align="center">
                <Box>
                  <Heading>{dog.name}</Heading>
                  <Heading size="sm">{dog.birthDate}</Heading>
                </Box>
                <AlertDelete handleDelete={handleDelete} />
              </Flex>
            </GridItem>
            <GridItem
              rowSpan={4}
              colSpan={2}
              boxShadow="md"
              rounded="md"
              bg="white"
              overflow="hidden"
            >
              <Flex flexDir="column">
                <AspectRatio ratio={4 / 3}>
                  {dog.photo ? (
                    <Image src={dog.photo} objectFit="cover" />
                  ) : (
                    <p>No Image</p>
                  )}
                </AspectRatio>
                <CreateDogExerciseModal />
              </Flex>
            </GridItem>
            <GridItem
              colSpan={4}
              rowSpan={4}
              h="500px"
              boxShadow="md"
              rounded="md"
              bg="white"
              overflowY="scroll"
            >
              <VStack spacing="30px" p="20px">
                {dog.dogExercises.map((dogExe) => (
                  <Flex
                    key={dogExe.id}
                    gap="50px"
                    boxShadow="md"
                    rounded="md"
                    bg="white"
                    p={4}
                  >
                    <Flex flexDir="column" justify="space-around">
                      <Heading size="sm">{dogExe.startDate}</Heading>
                      <Heading size="sm">{dogExe.endDate}</Heading>
                    </Flex>
                    <Box w="100px" h="100px" bg="blue"></Box>
                  </Flex>
                ))}
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Dog;
