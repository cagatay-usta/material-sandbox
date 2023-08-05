import React from "react";
import CommonButton from "../../components/common/CommonButton";
import { Grid } from "@mui/material";

function Authentication() {
  
  return (
    <>
      <Grid container xs={8}>
        <h1>Authentication</h1>
        <CommonButton color="secondary" size="large" variant="contained" >
          Add user
        </CommonButton>
        <Grid item >
          <CommonButton color="primary" size="large" variant="contained" >
            Add user
          </CommonButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Authentication;
