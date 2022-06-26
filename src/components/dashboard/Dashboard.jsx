import { Link } from "react-router-dom";
import { useGetDogsQuery } from "../../store/api/apiSlice";
import DogCard from "../DogComponents/DogCard";
import { store } from "../../store";
import {
  SimpleGrid,
  Box,
  Center,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import AddDogModal from "../crudModals/AddDogModal";
import { Spinner } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import DashboardGrid from "./DashboardGrid";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const user = store.getState().user;
  console.log(user);
  const { data, isLoading, isSuccess, isError, error } = useGetDogsQuery(
    user.id
  );

  const filterDogs = (data) => {
    return data.filter(
      (dog) => dog.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      {isLoading && (
        <Flex justify="center" align="center" mt="200px" w="75vw">
          <Spinner />
        </Flex>
      )}

      {data && (
        <Box as="div" p="20px" maxH="80vh" justifyContent="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" onChange={handleChange} />
          </InputGroup>
          <Flex flexDir="column" align="center" alignSelf="center">
            <Flex flexDir="column" gap={30}>
              <DashboardGrid dogs={filterDogs(data)} />
            </Flex>
            <AddDogModal dogs={data} />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
