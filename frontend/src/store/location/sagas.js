import { call, put, delay, select } from "redux-saga/effects";
import { createBrowserHistory } from "history";

import LocationService from "../../services/LocationService";

import { LOCATION_DATA_FAIL, LOCATION_DATA_SUCCESS } from "./types";

import ToastService from "../../services/ToastService";

const getSearchForm = (state) => state.search;

export function* getLocationData({ payload: { history } }) {
  yield delay(300);

  try {
    const { streetAddress, city, province, country, postalCode } = yield select(
      getSearchForm
    );

    const response = yield call(LocationService.findAddress, {
      streetAddress,
      city,
      province,
      country,
      postalCode,
    });

    const data = response.data;

    yield put({
      type: LOCATION_DATA_SUCCESS,
      payload: data,
    });

    history.push({
      pathname: "/location",
      search: new URLSearchParams(data).toString(),
    });
  } catch (err) {
    if (err?.response) {
      const message = err.response.data.message;

      ToastService.error(message);

      yield put({ type: LOCATION_DATA_FAIL, payload: message });
    } else {
      ToastService.error(err.message);
      yield put({ type: LOCATION_DATA_FAIL, payload: err.message });
    }
  }
}
