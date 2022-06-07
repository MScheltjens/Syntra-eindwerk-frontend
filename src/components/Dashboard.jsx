import React from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetClientsAndDogsQuery } from "../store/api/apiSlice";
import DogCard from "./DogCard";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import { store } from "../store";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((s) => s.user);
  console.log(user);
  const params = useParams();
  console.log(params);
  const {
    data: trainer,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetClientsAndDogsQuery(1); //change with id from context

  return (
    <>
      {trainer && (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {trainer.clients.map((client) => (
            <GridItem w="200px" h="200px" bg="blue.500">
              <DogCard client={client} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
