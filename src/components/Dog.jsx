import {
  Center,
  Heading,
  OrderedList,
  ListItem,
  Box,
  List,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { useGetDogQuery, useDeleteDogMutation } from "../store/api/apiSlice";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import CreateDogExerciseModal from "./CreateDogExerciseModal";

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
  const [deleteDog, {}] = useDeleteDogMutation();
  const handleClick = () => {
    deleteDog(dogId);
    navigate(-1);
  };

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
            {/* <Link to={"createExercise"}>
              <button>Add exercise</button>
              <button onClick={() => navigate(-1)}>close</button>
            </Link> */}
            <Button onClick={handleClick}>Delete dog</Button>
            {/* <Routes>
              <Route
                path={`createExercise`}
                element={
                  <CreateDogExercise dogName={dog.name} dogId={dog.id} />
                }
              />
            </Routes> */}
          </Box>
        )}
        <CreateDogExerciseModal />
      </Center>
    </>
  );
};

export default Dog;
