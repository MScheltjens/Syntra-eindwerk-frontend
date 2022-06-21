import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { store } from "../store";
import { GiDogHouse, GiJumpingDog } from "react-icons/gi";
import Alert from "./Alert";
import NavItem from "../components/NavItem";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  const user = store.getState().user;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(""));
    navigate("/");
  };

  return (
    <Box bg="#b6e0ec">
      <Flex
        pos="sticky"
        p="5"
        h="80vh"
        boxShadow="5px 0 12px rgba(0, 0, 0, 0.5) "
        w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-around"
        bg="#04abab"
        roundedRight="lg"
      >
        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"
        >
          {/* <IconButton
            icon={<IoIosArrowBack />}
            background="none"
            size="lg"
            mt={5}
            _hover={{ background: "none" }}
            onClick={() => {
              if (navSize == "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          /> */}
          {/* <NavItem
          navSize={navSize}
          title="Dashboard"
          description="This is the description for the dashboard."
        /> */}

          <NavItem
            navSize={navSize}
            title="Start"
            linkTo={"/dashboard"}
            icon={GiDogHouse}
          ></NavItem>
          <NavItem
            navSize={navSize}
            title="Exercises"
            linkTo={"exercises"}
            icon={GiJumpingDog}
          />
        </Flex>

        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize == "small" ? "none" : "flex"} />
          <Flex mt={4} align="center">
            <Avatar size="sm" src="" bg="orange.300" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize == "small" ? "none" : "flex"}
            >
              <Heading as="h3" size="sm">
                {user.name} {user.firstName}
              </Heading>
              <Text color="gray" mb={30}>
                Registered: {user.registerDate}
              </Text>
            </Flex>
          </Flex>
          <Divider display={navSize == "small" ? "none" : "flex"} />
        </Flex>
        <Alert btnTitle="Log out" handleClick={handleLogout} />
      </Flex>
    </Box>
  );
}
