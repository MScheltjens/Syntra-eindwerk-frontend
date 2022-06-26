import { Link } from "react-router-dom";
import { useGetDogsQuery } from "../../store/api/apiSlice";
import DogCard from "../DogComponents/DogCard";
import { store } from "../../store";
import { SimpleGrid, Box, Center, Flex } from "@chakra-ui/react";
import AddDogModal from "../crudModals/AddDogModal";
import { Spinner } from "@chakra-ui/react";

const Dashboard = () => {
  const user = store.getState().user;
  console.log(user);
  const {
    data: dogs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDogsQuery(user.id);

  return (
    <>
      {isLoading && (
        <Center mt="200px">
          <Spinner />
        </Center>
      )}

      {isSuccess && (
        <Box as="div" p={50} maxH="80vh" display="flex" justifyContent="center">
          <Flex flexDir="column" align="center" alignSelf="center">
            <Flex flexDir="column" gap={30}>
              {dogs && (
                <SimpleGrid
                  columns={[1, 2, 5]}
                  spacing="30px"
                  maxH="70vh"
                  overflowY="scroll"
                  p="20px"
                >
                  {dogs.map(({ id, photo, name }) => (
                    <Link to={`dogs/${id}`} key={id}>
                      <DogCard dogPhoto={photo} name={name} />
                    </Link>
                  ))}
                  <AddDogModal dogs={dogs} />
                </SimpleGrid>
              )}
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
