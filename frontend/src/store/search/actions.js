import {
  SEARCH_FORM_SET_ADDRESS,
  SEARCH_FORM_SET_CITY,
  SEARCH_FORM_SET_PROVINCE,
  SEARCH_FORM_SET_COUNTRY,
  SEARCH_FORM_SET_POSTAL_CODE,
  SEARCH_FORM_CLEAR,
} from "./types";

export function setSearchFormAddress(streetAddress) {
  return {
    type: SEARCH_FORM_SET_ADDRESS,
    payload: streetAddress,
  };
}

export function setSearchFormCity(city) {
  return {
    type: SEARCH_FORM_SET_CITY,
    payload: city,
  };
}

export function setSearchFormProvince(province) {
  return {
    type: SEARCH_FORM_SET_PROVINCE,
    payload: province,
  };
}

export function setSearchFormCountry(country) {
  return {
    type: SEARCH_FORM_SET_COUNTRY,
    payload: country,
  };
}

export function setSearchFormPostalCode(postalCode) {
  return {
    type: SEARCH_FORM_SET_POSTAL_CODE,
    payload: postalCode,
  };
}

export function clearSearchForm() {
  return {
    type: SEARCH_FORM_CLEAR,
  };
}
