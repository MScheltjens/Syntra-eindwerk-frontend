import { Center, Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useGetDogQuery, useDeleteDogMutation } from "../../store/api/apiSlice";
import { useNavigate } from "react-router-dom";
import DogGridHeader from "./DogGridHeader";
import DogGridControl from "./DogGridControl";
import DogGridExerciseList from "./DogGridExerciseList";

const Dog = () => {
  const { dogId } = useParams();
  const navigate = useNavigate();
  const {
    data: dog,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDogQuery(dogId, { pollingInteval: 1000 });
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
        <Box as="div" p="20px" overflowY="scroll">
          <Grid
            h="75vh"
            w="150vh"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <GridItem
              colSpan={6}
              rowSpan={1}
              boxShadow="2xl"
              rounded="md"
              bgColor="#108dc7"
              p={5}
            >
              <DogGridHeader
                name={dog.name}
                birthDate={dog.birthDate}
                users={dog.users}
                handleDelete={handleDelete}
              />
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={2}
              boxShadow="2xl"
              rounded="md"
              bgColor="#108dc7"
              p="10px"
              overflow="hidden"
            >
              <DogGridControl photo={dog.photo} handleDelete={handleDelete} />
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={4}
              boxShadow="2xl"
              rounded="md"
              bgColor="#108dc7"
              p={5}
              overflow="hidden"
              overflowY="auto"
            >
              <DogGridExerciseList dogExercises={dog.dogExercises} />
            </GridItem>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Dog;
