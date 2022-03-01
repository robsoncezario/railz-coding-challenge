import { all, takeLatest } from "redux-saga/effects";

import { getLocationData } from "./location/sagas";
import { REQUEST_LOCATION_DATA } from "./location/types";

export default function* root() {
  yield all([takeLatest(REQUEST_LOCATION_DATA, getLocationData)]);
}
