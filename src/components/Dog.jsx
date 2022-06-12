import {
  Center,
  Heading,
  OrderedList,
  ListItem,
  Box,
  List,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { useGetDogQuery } from "../store/api/apiSlice";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import CreateDogExercise from "./CreateDogExercise";

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
  return (
    <>
      <Center>
        {dog && (
          <Box>
            <p>{JSON.stringify(dog.dogExercises)}</p>
            <Heading>{dog.name}</Heading>
            <OrderedList>
              {dog.dogExercises.map((dogEx) => (
                <ListItem key={dogEx.id}>
                  <Link to={`/dashboard/dog_exes/${dogEx.id}`}>
                    <p>{dogEx.startDate}</p>
                    <p>{dogEx.id}</p>
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
            <Link to={"createExercise"}>
              <button>Add exercise</button>
              <button onClick={() => navigate(-1)}>close</button>
            </Link>
            <Routes>
              <Route
                path={`createExercise`}
                element={
                  <CreateDogExercise dogName={dog.name} dogId={dog.id} />
                }
              />
            </Routes>
          </Box>
        )}
      </Center>
    </>
  );
};

export default Dog;
