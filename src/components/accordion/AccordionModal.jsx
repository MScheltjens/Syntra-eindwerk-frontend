import { Box, Accordion } from "@chakra-ui/react";
import ExerciseAccordionItem from "./ExerciseAccordionItem";

const AccordionModal = ({ exercises, searchWord }) => {
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchWord.toLowerCase())
  );
  return (
    <Box maxH="600px" overflow="hidden" overflowY="auto">
      <p>{searchWord}</p>
      {filteredExercises && (
        <Accordion allowToggle p={50} maxWidth="400px">
          {exercises.map((ex) => (
            <ExerciseAccordionItem ex={ex} key={ex.id} modalVersion={true} />
          ))}
        </Accordion>
      )}
    </Box>
  );
};

export default AccordionModal;
