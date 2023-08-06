import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

function SearchBar({placeholder, onChange}) {
  return (
    <div>
      <Input placeholder={placeholder} onChange={onChange}/>
      <SearchIcon />
    </div>
  );
}

export default SearchBar;
