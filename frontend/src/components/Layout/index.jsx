import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/index.jsx";

import { Container, Content } from "./styles";

function Layout({ children, showExitButton }) {
  return (
    <Container>
      <Header showExitButton={showExitButton} />
      <Content>{children}</Content>
    </Container>
  );
}

Layout.propTypes = {
  showExitButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
