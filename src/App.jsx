import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedLocation = location.pathname.replace(/\W/g, " ");
    setTitle(parsedLocation);
  }, [location]);

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
