import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DogCard from "../DogComponents/DogCard";

const DashboardGrid = ({ dogs }) => {
  return (
    <SimpleGrid
      columns={[1, 2, 5]}
      spacing="30px"
      maxH="70vh"
      overflowY="scroll"
      p="20px"
    >
      {dogs.map(({ id, photo, name }) => (
        <Link to={`dogs/${id}`} key={id}>
          <DogCard dogPhoto={photo} name={name} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default DashboardGrid;
