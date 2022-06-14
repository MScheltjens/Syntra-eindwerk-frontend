import { Center, Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useGetDogQuery, useDeleteDogMutation } from "../store/api/apiSlice";
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
        <Box as="div" p={50} overflowY="scroll">
          {/* {JSON.stringify(dog)} */}
          <Grid
            templateRows="repeat(5, 3fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            maxH="inherit"
          >
            <GridItem
              rowSpan={1}
              colSpan={6}
              boxShadow="2xl"
              rounded="md"
              bg="#04abab"
              p={5}
            >
              <DogGridHeader name={dog.name} birthDate={dog.birthDate} />
            </GridItem>
            <GridItem
              rowSpan={4}
              colSpan={2}
              boxShadow="2xl"
              rounded="md"
              bg="#04abab"
              p={5}
            >
              <DogGridControl photo={dog.photo} handleDelete={handleDelete} />
            </GridItem>
            <GridItem
              colSpan={4}
              rowSpan={4}
              h="500px"
              boxShadow="2xl"
              rounded="md"
              bg="#04abab"
              overflowY="scroll"
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
