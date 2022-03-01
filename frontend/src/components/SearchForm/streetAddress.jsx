import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFormAddress } from "../../store/search/actions";

import { Input } from "./styles";

export default function StreetAddressInput() {
  const dispatch = useDispatch();
  const streetAddress = useSelector((state) => state.search.streetAddress);

  const handleChange = (event) => {
    event.persist();
    dispatch(setSearchFormAddress(event.target.value));
  };

  return (
    <Input
      value={streetAddress}
      onChange={handleChange}
      className={"full-width"}
      placeholder={"Street address"}
      spellCheck={false}
      maxLength={100}
    />
  );
}
