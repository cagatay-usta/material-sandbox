import React, { useState } from "react";
import { Grid } from "@mui/material";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import SearchBar from "../../components/common/SearchBar";

function Authentication() {
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };
    return (
      <SearchBar
        placeholder="Search by email adress"
        onChange={(event) => handleChange(event.target.value)}
      />
    );
  };
  return (
    <Grid item xs={8} sx={{ marginLeft: "320px" }}>
      <BasicCard header={getHeader()} />
    </Grid>
  );
}

export default Authentication;
