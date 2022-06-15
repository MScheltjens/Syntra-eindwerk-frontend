import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetDogsQuery } from "../store/api/apiSlice";
import DogCard from "../components/DogCard";
import { store } from "../store";
import { useSelector } from "react-redux";
import { SimpleGrid, Box, Center, Input, Flex, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddDogModal from "./AddDogModal";
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
      {/* {isSuccess && <p>{JSON.stringify(dogs)}</p>} */}
      <Center as="div" p={50} maxH="80vh">
        <Flex flexDir="column" align="center">
          <Flex flexDir="column" gap={30}>
            {/* <Input placeholder="Search" value={value} onChange={handleFilter} /> */}
            {dogs && (
              <SimpleGrid
                columns={[1, 3, 5]}
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
              </SimpleGrid>
            )}
          </Flex>
          <AddDogModal />
        </Flex>
      </Center>
    </>
  );
};

export default Dashboard;
