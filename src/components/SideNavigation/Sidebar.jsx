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
  Icon,
} from "@chakra-ui/react";
import { store } from "../../store";
import { GiDogHouse, GiJumpingDog, GiDogBowl } from "react-icons/gi";
import Alert from "../Alert";
import NavItem from "../SideNavigation/NavItem";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate, useParams } from "react-router";
import AddDogModal from "../crudModals/AddDogModal";
import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  const user = store.getState().user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  console.log(Object.values(params));

  const handleLogout = () => {
    dispatch(logout(""));
    navigate("/");
  };

  //nav treats exercise as child route. quick fix:

  return (
    <Box color="orange.300">
      <Flex
        pos="sticky"
        p="5"
        h="80vh"
        boxShadow="5px 0 12px rgba(0, 0, 0, 0.5) "
        w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-around"
        roundedRight="lg"
        align="center"
        bg="#108dc7"
      >
        <NavLink to="/dashboard">
          <Flex direction="column" align="center" gap="10px">
            <Icon as={GiDogHouse} boxSize="50px" color="orange.300" />
            <Heading s="lg" mt="10px">
              Start
            </Heading>
          </Flex>
        </NavLink>
        <NavLink
          to="exercises"
          style={({ isActive }) => {
            return { borderBottom: isActive ? "2px solid #108dc7" : "grey" };
          }}
        >
          <Flex direction="column" align="center">
            <Icon as={GiJumpingDog} boxSize="30px" />
            <Heading size="md" mt="10px">
              {" "}
              Exercises
            </Heading>
          </Flex>
        </NavLink>
        <NavLink
          to="healthAndFood"
          style={({ isActive }) => {
            return { borderBottom: isActive ? "2px solid #108dc7" : "grey" };
          }}
        >
          <Flex direction="column" align="center">
            <Icon as={GiDogBowl} boxSize="30px" />
            <Heading size="md" mt="10px">
              Health
            </Heading>
          </Flex>
        </NavLink>

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
