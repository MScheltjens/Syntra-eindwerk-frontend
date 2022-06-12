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

import NavItem from "../components/NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  const user = store.getState().user;

  return (
    <Flex
      pos="sticky"
      p="5"
      h="80vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderTopRightRadius={navSize == "small" ? "15px" : "30px"}
      borderBottomRightRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
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
        ></NavItem>
        <NavItem navSize={navSize} title="Exercises" linkTo={"exercises"} />
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
            <Text color="gray">{user.registerDate.slice()}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
