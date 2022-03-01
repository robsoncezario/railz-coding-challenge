import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFormPostalCode } from "../../store/search/actions";

import { Input } from "./styles";

export default function PostalCodeInput() {
  const dispatch = useDispatch();
  const postalCode = useSelector((state) => state.search.postalCode);

  const handleChange = (event) => {
    event.persist();
    dispatch(setSearchFormPostalCode(event.target.value));
  };

  return (
    <Input
      value={postalCode}
      onChange={handleChange}
      className={"w-35"}
      placeholder={"Postal code"}
      spellCheck={false}
      maxLength={100}
    />
  );
}
