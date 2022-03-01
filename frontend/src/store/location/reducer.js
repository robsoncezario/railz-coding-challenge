import {
  REQUEST_LOCATION_DATA,
  LOCATION_DATA_SUCCESS,
  LOCATION_DATA_FAIL,
} from "./types";

const initialState = {
  error: false,
  loading: false,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOCATION_DATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOCATION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case LOCATION_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
}
