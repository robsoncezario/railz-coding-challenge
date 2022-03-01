import {
  SEARCH_FORM_SET_ADDRESS,
  SEARCH_FORM_SET_CITY,
  SEARCH_FORM_SET_PROVINCE,
  SEARCH_FORM_SET_COUNTRY,
  SEARCH_FORM_SET_POSTAL_CODE,
  SEARCH_FORM_CLEAR,
} from "./types";

const initialState = {
  streetAddress: "",
  city: "",
  province: "",
  country: "",
  postalCode: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_FORM_SET_ADDRESS:
      return {
        ...state,
        streetAddress: action.payload,
      };
    case SEARCH_FORM_SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SEARCH_FORM_SET_PROVINCE:
      return {
        ...state,
        province: action.payload,
      };
    case SEARCH_FORM_SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SEARCH_FORM_SET_POSTAL_CODE:
      return {
        ...state,
        postalCode: action.payload,
      };
    case SEARCH_FORM_CLEAR:
      return initialState;
    default:
      return state;
  }
}
