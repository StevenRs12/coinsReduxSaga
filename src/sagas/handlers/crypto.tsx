import { call, put } from "redux-saga/effects";
import { setAllCryptos } from "../../actions/cryptoActions";
import { requestGetAllCrypto } from "../request/crypto";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* handelGetAllCryptos() {
  try {
    const response: ResponseGenerator = yield call(requestGetAllCrypto);
    const { data } = response;
    yield put(setAllCryptos(data));
  } catch (error) {
    console.log(error);
  }
}
