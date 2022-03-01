import { REQUEST_LOCATION_DATA } from "./types";

export function requestLocationData(history) {
  return {
    type: REQUEST_LOCATION_DATA,
    payload: {
      history,
    },
  };
}
