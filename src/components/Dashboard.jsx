import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetDogsQuery } from "../store/api/apiSlice";
import DogCard from "../components/DogCard";
import { store } from "../store";
import { useSelector } from "react-redux";
import { SimpleGrid, Box, Center, Input, Flex, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddDogModal from "./AddDogModal";
import { Spinner } from "@chakra-ui/react";
import CloudinarySDK from "./cloudinarySDK/CloudinarySDK";

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
      {isSuccess && <pre>{JSON.stringify(dogs)}</pre>}
      <Box as="div" p={50} maxH="80vh" display="flex" justifyContent="center">
        <Flex flexDir="column" align="center" alignSelf="center">
          <Flex flexDir="column" gap={30}>
            {/* <Input placeholder="Search" value={value} onChange={handleFilter} /> */}
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
              </SimpleGrid>
            )}
          </Flex>
          <AddDogModal dogs={dogs} />
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
