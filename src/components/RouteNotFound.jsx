import { Box, Heading, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../store";

const RouteNotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <Box h="80vh" display="flex" justifyContent="center">
      <Box alignSelf="center">
        <Heading>404 Not found!</Heading>
        <Link to="/">
          <Text align="center">Back to the homepage</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default RouteNotFound;
