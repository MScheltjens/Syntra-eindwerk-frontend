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
  AspectRatio,
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
        <Box
          w="80vw"
          m="30px"
          maxH="60vh"
          overflow="hidden"
          overflowY="auto"
          color="#108dc7"
        >
          <ExerciseAccordion />
          <Accordion>
            {data.map((ex) => {
              return (
                <AccordionItem key={ex.id}>
                  <Link to={`${ex.id}`}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading size="md">{ex.name}</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                  </Link>
                  <AccordionPanel pb={4}>
                    <Flex justifyContent="space-around">
                      <Box maxW="500px">
                        {/* <Heading>Description:</Heading> */}
                        <Text mt="50px" mb="10px">
                          {ex.description}
                        </Text>
                        <hr />
                        <Box p="10px">
                          <Text>Posted at: {ex.AddedAt}</Text>
                          <Text>Created by: {ex.trainer.firstName}</Text>
                        </Box>
                        <hr />
                        {ex.dogExercises && (
                          <Box>
                            <Heading size="md" p="10px">
                              Dogs:
                            </Heading>

                            <ul>
                              {ex.dogExercises.map((dogEx) => (
                                <Link to={"/dashboard/dogs/" + dogEx.dog.id}>
                                  <li>{dogEx.dog.name}</li>
                                </Link>
                              ))}
                            </ul>
                          </Box>
                        )}
                      </Box>
                      <AspectRatio w="560px" ratio={4 / 3}>
                        <iframe
                          title="naruto"
                          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                          allowFullScreen
                        />
                      </AspectRatio>

                      {/* <Box borderBottom="2px solid #fda94a">
                        <CloudinaryVideo publicId={ex.videoUrl} />
                      </Box> */}
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
