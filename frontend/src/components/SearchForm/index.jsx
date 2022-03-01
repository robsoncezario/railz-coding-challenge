import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Row, Button } from "./styles";

import CityInput from "./city.jsx";
import StreetAddressInput from "./streetAddress.jsx";
import ProvinceInput from "./province.jsx";
import CountryInput from "./country.jsx";
import PostalCodeInput from "./postalCode.jsx";

import { requestLocationData } from "../../store/location/actions";

export default function SearchForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch(requestLocationData(history));
  };

  return (
    <>
      <Row>
        <StreetAddressInput />
      </Row>

      <Row>
        <CityInput />
        <ProvinceInput />
      </Row>

      <Row>
        <CountryInput />
        <PostalCodeInput />
      </Row>

      <Button onClick={handleClick}>Search</Button>
    </>
  );
}
