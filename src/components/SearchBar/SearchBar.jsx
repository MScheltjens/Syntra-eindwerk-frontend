import { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { none } from "@cloudinary/url-gen/qualifiers/progressive";

const SearchBar = ({ placeholder, data, setSelection, setSelectEx }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      // nog ombouwen zodat door heel de objecten geloopt kan worden (object.entries)
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder={placeholder} onChange={handleFilter} />
      </InputGroup>
      {filteredData.length != 0 && (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          maxHeight="200px"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {filteredData.map((data) => (
            <Box key={data.id} onClick={() => setSelection(data.id)}>
              {data.name}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default SearchBar;
