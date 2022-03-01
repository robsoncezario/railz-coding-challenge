import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { clearSearchForm } from "../../store/search/actions";

import { Container, ExitButton } from "./styles";

function Header({ showExitButton }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(clearSearchForm());
    history.push("/");
  };

  return (
    <Container>
      {showExitButton && <ExitButton onClick={handleClick}>Exit</ExitButton>}
    </Container>
  );
}

Header.propTypes = {
  showExitButton: PropTypes.bool,
};

export default Header;
