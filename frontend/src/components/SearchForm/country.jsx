import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFormCountry } from "../../store/search/actions";

import { Input } from "./styles";

export default function CountryInput() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.search.country);

  const handleChange = (event) => {
    event.persist();
    dispatch(setSearchFormCountry(event.target.value));
  };

  return (
    <Input
      value={country}
      onChange={handleChange}
      className={"w-60"}
      placeholder={"Country"}
      spellCheck={false}
      maxLength={100}
    />
  );
}
