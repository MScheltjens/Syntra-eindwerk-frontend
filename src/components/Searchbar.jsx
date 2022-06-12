import { Input } from "@chakra-ui/react";
import React from "react";

const Searchbar = ({ user }) => {
  const [filteredData, setDilteredData] = useState([]);
  return (
    <>
      <Input placeholder="Search..." value={value} onChange={handleFilter} />
    </>
  );
};

export default Searchbar;
