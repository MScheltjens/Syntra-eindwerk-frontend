import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./store/api/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApiProvider api={apiSlice}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ApiProvider>
    </ChakraProvider>
  </React.StrictMode>
);
