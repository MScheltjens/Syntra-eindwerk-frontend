import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { store } from "../store";
import { useLoginUserMutation } from "../store/api/authApiSlice";
import userSlice, { login } from "../store/userSlice";
import { addDogs } from "../store/dogsSlice";
import { addExercises } from "../store/exerciseSlice";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Spinner,
  Image,
  Img,
  Text,
  Icon,
} from "@chakra-ui/react";

const Login = () => {
  console.log(store.getState());
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data, isError, error }] = useLoginUserMutation();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHidden(true);
    await loginUser({
      username: email,
      password,
    });
  };

  // save userdata in store and redirect to dashboard if the user is a trainer
  useEffect(() => {
    if (data) {
      dispatch(login(data));
      data.isTrainer === false ? setHidden(false) : navigate("dashboard");
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isError]);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="80vh"
      backgroundColor="fff"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Img src="src/assets/DogGo.png" maxWidth="500px" />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal"
          size="xl"
          visibility={!hidden ? "hidden" : ""}
        />
        <Box
          minW={{ base: "90%", md: "468px" }}
          visibility={hidden ? "hidden" : ""}
        >
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    type="email"
                    placeholder="email address"
                    onChange={(e) => setEmail(e.target.value)}
                    bg="white"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  {/* <Link>forgot password?</Link> */}
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={5}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                bg="#ff8802"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

      {/* <Box>
        New to us?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box> */}
    </Flex>
  );
};

export default Login;
