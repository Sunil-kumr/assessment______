import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="sm">
          <Auth />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
