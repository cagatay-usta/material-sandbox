import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication.jsx";
import Database from "./Pages/Database/Database.jsx";
import Function from "./Pages/Function/Function.jsx";
import Hosting from "./Pages/Hosting/Hosting.jsx";
import MachineLearning from "./Pages/MachineLearning/MachineLearning.jsx";
import Storage from "./Pages/Storage/Storage.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/dashboardTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="function" element={<Function />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
