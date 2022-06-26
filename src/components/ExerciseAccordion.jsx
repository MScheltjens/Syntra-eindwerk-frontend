import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
const ExerciseAccordion = ({ data }) => {
  return (
    <>
      {data && (
        <Box w="80vw" m="30px">
          <ExerciseAccordion />
          <Accordion>
            {data.map((ex) => {
              return (
                <AccordionItem key={ex.id}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {ex.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{ex.description}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      )}
    </>
  );
};

export default ExerciseAccordion;
