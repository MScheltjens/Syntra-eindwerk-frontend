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
  StackDivider,
} from "@chakra-ui/react";
import AlertDelete from "./AlertDelete";
import { useParams } from "react-router";
import { useGetDogQuery, useDeleteDogMutation } from "../store/api/apiSlice";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import CreateDogExerciseModal from "./CreateDogExerciseModal";
import EditDogModal from "./EditDogModal";

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
              boxShadow="2xl"
              rounded="md"
              bg="#04abab"
              p={5}
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Heading>{dog.name}</Heading>
                  <Heading size="sm">{dog.birthDate}</Heading>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              rowSpan={4}
              colSpan={2}
              boxShadow="2xl"
              rounded="md"
              bg="#04abab"
              overflow="hidden"
              p={5}
            >
              <Flex flexDir="column" gap={50}>
                <Box>
                  <AspectRatio ratio={4 / 3}>
                    {dog.photo ? (
                      <Image src={dog.photo} objectFit="cover" rounded="md" />
                    ) : (
                      <p>No Image</p>
                    )}
                  </AspectRatio>
                </Box>
                <VStack align="stretch">
                  <CreateDogExerciseModal />
                  <EditDogModal />
                  <AlertDelete handleDelete={handleDelete} />
                </VStack>
              </Flex>
            </GridItem>
            <GridItem
              colSpan={4}
              rowSpan={4}
              h="500px"
              boxShadow="2xls"
              rounded="md"
              bg="#04abab"
              overflowY="scroll"
            >
              <VStack
                p="20px"
                divider={<StackDivider borderColor="#fda94a" />}
                spacing={2}
                align="stretch"
              >
                {dog.dogExercises.map((dogExe) => (
                  <Flex key={dogExe.id} justify="space-around" rounded="md">
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
