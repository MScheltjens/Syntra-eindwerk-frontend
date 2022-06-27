import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Link, Routes, Route } from "react-router-dom";

const ExerciseAccordion = ({ data }) => {
  return (
    <>
      {data && (
        <Box w="80vw" m="30px" overflow="hidden" overflowY="auto">
          <ExerciseAccordion />
          <Accordion>
            {data.map((ex) => {
              return (
                <AccordionItem key={ex.id}>
                  <Link to={`/dashboard/exercises/${ex.id}`}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {ex.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                  </Link>
                  <AccordionPanel pb={4}>{ex.description}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      )}
      <Routes>
        <Route
          path={`/dashboard/exercises/:exId`}
          element={<AccordionPanel />}
        />
      </Routes>
    </>
  );
};

export default ExerciseAccordion;
