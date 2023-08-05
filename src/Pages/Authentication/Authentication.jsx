import React from "react";
import CommonButton from "../../components/common/CommonButton";
import { Grid } from "@mui/material";
import NotificationBell from "../../components/common/Notifications/NotificationBell";

function Authentication() {
  return (
    <>
      <Grid item>
        <h1>Authentication</h1>
        <NotificationBell iconColor="primary" badgeContent={5} />
      </Grid>
    </>
  );
}

export default Authentication;
