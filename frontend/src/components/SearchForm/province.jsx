import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFormProvince } from "../../store/search/actions";

import { Input } from "./styles";

export default function ProvinceInput() {
  const dispatch = useDispatch();
  const province = useSelector((state) => state.search.province);

  const handleChange = (event) => {
    event.persist();
    dispatch(setSearchFormProvince(event.target.value));
  };

  return (
    <Input
      value={province}
      onChange={handleChange}
      className={"w-47"}
      placeholder={"Province"}
      spellCheck={false}
      maxLength={100}
    />
  );
}
