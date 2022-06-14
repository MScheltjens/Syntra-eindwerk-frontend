import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
} from "@chakra-ui/react";
import { store } from "../store";
import { GiDogHouse, GiJumpingDog } from "react-icons/gi";

import NavItem from "../components/NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  const user = store.getState().user;

  return (
    <Box bg="#b6e0ec">
      <Flex
        pos="sticky"
        p="5"
        h="80vh"
        boxShadow="5px 0 12px rgba(0, 0, 0, 0.5) "
        w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
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
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: "none" }}
            onClick={() => {
              if (navSize == "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          />
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
            <Avatar size="sm" src="" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize == "small" ? "none" : "flex"}
            >
              <Heading as="h3" size="sm">
                {user.name} {user.firstName}
              </Heading>
              <Text color="gray">
                Registered: {user.registerDate.substring(0, 10)}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
