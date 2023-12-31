import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function BasicCard({ header, content }) {
  return (
    <Card>
      {header}
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}

export default BasicCard
