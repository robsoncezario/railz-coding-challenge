import React from "react";

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import ToastContainer from "./components/Toast/container";

import Routes from "./pages/index";

import store from "./store/index";
import theme from "./styles/theme";
import history from "./history";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Router history={history}>
          <Routes />
        </Router>

        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}
