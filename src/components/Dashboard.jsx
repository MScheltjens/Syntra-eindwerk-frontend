import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetUserQuery } from "../store/api/apiSlice";
import DogCard from "../components/DogCard";
import { store } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { SimpleGrid, Box, Center, Input, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddDogModal from "./AddDogModal";
import { addDogs } from "../store/dogsSlice";

const Dashboard = () => {
  const dogs = store.getState().dogs;
  console.log(dogs);
  const ex = store.getState().exercises;
  console.log(ex);
  // const dispatch = useDispatch();
  // console.log(user);
  // const { data, isLoading, isSuccess, isError, error } = useGetUserQuery(
  //   user.id
  // );

  return (
    <>
      {dogs && <p>{JSON.stringify(dogs)}</p>}
      <Center as="div" p={50} maxH="80vh">
        <Flex flexDir="column" gap={30}>
          {/* <Input placeholder="Search" value={value} onChange={handleFilter} />  */}
          {dogs && (
            <SimpleGrid
              columns={[1, 3, 5]}
              spacing="30px"
              maxH="70vh"
              overflowY="scroll"
            >
              {dogs.map(({ id, photo, name }) => (
                <Link to={`dogs/${id}`} key={id}>
                  <DogCard dogPhoto={photo} name={name} />
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
