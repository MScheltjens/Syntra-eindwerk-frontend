import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  Heading,
  Text,
  AspectRatio,
  StackDivider,
} from "@chakra-ui/react";

const ExerciseAccordionItem = ({ ex }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading>{ex.name}</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <HStack
          divider={<StackDivider borderColor="gray.200" />}
          align="center"
          justify="space-around"
        >
          <Box>
            <Text>{ex.description}</Text>
          </Box>

          <AspectRatio w="500px" ratio={1} rounded="xl" overflow="hidden">
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ExerciseAccordionItem;
