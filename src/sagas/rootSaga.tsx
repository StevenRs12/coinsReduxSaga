import { takeLatest } from "redux-saga/effects";
import { types } from "../types/types";
import { handleGetAllCryptos, handleGetCryptoById } from "./handlers/crypto";

export function* watcherSaga() {
  yield takeLatest(types.getCryptoDetailsById, handleGetCryptoById);
  yield takeLatest(types.getAllsCryptos, handleGetAllCryptos);
}
