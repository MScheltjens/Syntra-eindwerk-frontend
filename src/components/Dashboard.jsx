import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetUserQuery } from "../store/api/apiSlice";
import DogCard from "../components/DogCard";
import { store } from "../store";
import { useSelector } from "react-redux";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";

const Dashboard = () => {
  const userId = store.getState().user.id;

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery(userId);

  return (
    <>
      {/* {user && <p>{JSON.stringify(user.dogs)}</p>} */}
      <Center as="div" p={50}>
        {user && (
          <SimpleGrid
            columns={[1, 3, 5]}
            spacing="30px"
            maxH="70vh"
            overflowY="scroll"
          >
            {user.dogs.map(({ id, photo, dogExercises, name }) => (
              <Link to={`dogs/${id}`} key={id}>
                <DogCard
                  dogPhoto={photo}
                  dogExe={dogExercises.length}
                  name={name}
                />
              </Link>
            ))}
          </SimpleGrid>
        )}
      </Center>
    </>
  );
};

export default Dashboard;
