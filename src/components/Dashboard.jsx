import React from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { useGetClientsAndDogsQuery } from "../store/api/apiSlice";
import DogCard from "./DogCard";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import { store } from "../store";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((s) => s.user);
  console.log(user.data);
  const params = useParams();
  console.log(params);
  const { data, isLoading, isSuccess, isError, error } =
    useGetClientsAndDogsQuery(1); //change with id from context
  console.log(store.getState().user);
  return <>{JSON.stringify(data)}</>;
};

export default Dashboard;
