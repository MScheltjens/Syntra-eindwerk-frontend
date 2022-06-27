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
  VStack,
} from "@chakra-ui/react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { IoMdCreate, IoMdClose } from "react-icons/io";
import CloudinaryVid from "./cloudinarySDK/CloudinarySDKVideo";
import { CloudinaryVideo } from "@cloudinary/url-gen";
import AddExModal from "./crudModals/AddExModal";
import EditDogModal from "./crudModals/EditDogModal";

const ExerciseAccordion = ({ data }) => {
  const params = useParams();
  const exId = params["*"];

  console.log(exId);
  return (
    <>
      {data && (
        <Box w="80vw" h="500px" m="30px" overflow={"hidden"} overflowY="auto">
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
                    <Box display="flex" justifyContent="space-around" p="20px">
                      <Box maxW="560px">
                        <Heading size="sm" pb="20px">
                          Description:
                        </Heading>
                        <Text>{ex.description}</Text>
                      </Box>

                      <AspectRatio w="560px" ratio={4 / 3}>
                        {/* <CloudinaryVideo publicId={ex.videoUrl} /> */}
                        <iframe
                          title="naruto"
                          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </Box>
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
