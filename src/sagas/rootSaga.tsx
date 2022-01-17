import { takeLatest } from "redux-saga/effects";
import { types } from "../types/types";
import { handelGetAllCryptos } from "./handlers/crypto";

export function* watcherSaga() {
  yield takeLatest(types.getAllsCryptos, handelGetAllCryptos);
}
