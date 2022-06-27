import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Flex,
  Heading,
  Icon,
  Alert,
} from "@chakra-ui/react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { IoMdCreate, IoMdClose } from "react-icons/io";
import CloudinaryVid from "./cloudinarySDK/CloudinarySDKVideo";
import { CloudinaryVideo } from "@cloudinary/url-gen";

const ExerciseAccordion = ({ data }) => {
  const params = useParams();
  const exId = params["*"];

  console.log(exId);
  return (
    <>
      {data && (
        <Box w="80vw" m="30px" overflow="hidden" overflowY="auto">
          <ExerciseAccordion />
          <Accordion>
            {data.map((ex) => {
              return (
                <AccordionItem key={ex.id}>
                  <Link to={`${ex.id}`}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {ex.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                  </Link>
                  <AccordionPanel pb={4}>
                    <Flex justify="space-between">
                      <Heading>Description:</Heading>

                      <Flex mr="30px" gap="30px">
                        {/* <Icon
                          as={IoMdCreate}
                          boxSize="40px"
                          color="green"
                          _hover={{ cursor: "pointer" }}
                        />
                        <Icon
                          as={IoMdClose}
                          boxSize="40px"
                          color="red"
                          _hover={{ cursor: "pointer" }}
                        /> */}
                      </Flex>
                    </Flex>
                    <Flex>
                      <Box>
                        <Text>{ex.description}</Text>
                      </Box>

                      <Box borderBottom="2px solid #fda94a">
                        <CloudinaryVideo publicId={ex.videoUrl} />
                      </Box>
                    </Flex>
                  </AccordionPanel>
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
