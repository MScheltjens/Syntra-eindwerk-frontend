import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetUserQuery } from "../store/api/apiSlice";
import DogCard from "../components/DogCard";
import { store } from "../store";
import { useSelector } from "react-redux";
import { SimpleGrid, Box, Center, Input, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddDogModal from "./AddDogModal";

const Dashboard = () => {
  const user = store.getState().user;
  console.log(user);
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery(
    user.id
  );

  return (
    <>
      {/* {user && <p>{JSON.stringify(user.dogs)}</p>} */}
      <Center as="div" p={50} maxH="80vh">
        <Flex flexDir="column" gap={30}>
          {/* <Input placeholder="Search" value={value} onChange={handleFilter} /> */}
          {data && (
            <SimpleGrid
              columns={[1, 3, 5]}
              spacing="30px"
              maxH="70vh"
              overflowY="scroll"
            >
              {data.dogs.map(({ id, photo, dogExercises, name }) => (
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
        </Flex>
        <AddDogModal />
      </Center>
    </>
  );
};

export default Dashboard;
