import { Icon, Flex, Heading } from "@chakra-ui/react";
import { GiDogBowl } from "react-icons/gi";

const HealthFood = () => {
  return (
    <Flex h="full" w="90vw" align="center" justifyContent="center">
      <Flex direction="column" align="center">
        <Heading s="2xl">Coming Soon</Heading>
        <Icon as={GiDogBowl} boxSize="xs" />
      </Flex>
    </Flex>
  );
};

export default HealthFood;
