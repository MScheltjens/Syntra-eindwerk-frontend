import { useState } from "react";
import {
  Accordion,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
SearchIcon;
import ExerciseAccordionItem from "../accordion/ExerciseAccordionItem";
import { SearchIcon } from "@chakra-ui/icons";
const SearchBarExercises = ({ placeholder, exercises }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = "";

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = exercises.filter((ex) => {
      return ex.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <>
      <InputGroup position="fixed" top="" left="715" minWidth="250px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          bg="white"
          width="250px"
        />
      </InputGroup>

      <Accordion allowToggle p={0} minW="250px">
        {filteredData.map((ex) => (
          <ExerciseAccordionItem
            ex={ex}
            key={ex.id}
            modalVersion={true}
            onClick={() => setOpen(!isOpen)}
          />
        ))}
      </Accordion>
    </>
  );
};

export default SearchBarExercises;
