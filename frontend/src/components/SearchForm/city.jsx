import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFormCity } from "../../store/search/actions";

import { Input } from "./styles";

export default function CityInput() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.search.city);

  const handleChange = (event) => {
    event.persist();
    dispatch(setSearchFormCity(event.target.value));
  };

  return (
    <Input
      value={city}
      onChange={handleChange}
      className={"w-47"}
      placeholder={"City"}
      spellCheck={false}
      maxLength={100}
    />
  );
}
