import { call, put } from "redux-saga/effects";
import { setAllCryptos, setCryptoById } from "../../actions/cryptoActions";
import { cryptoDetailInterface } from "../../interfaces/crypto.interfaces";
import { requestGetAllCrypto, requestGetCryptoById } from "../request/crypto";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* handleGetAllCryptos() {
  try {
    const response: ResponseGenerator = yield call(requestGetAllCrypto);
    const { data } = response;
    yield put(setAllCryptos(data));
  } catch (error) {
    console.log(error);
  }
}

type Params = { id: string; type: string };

export function* handleGetCryptoById({ id }: Params) {
  try {
    const response: cryptoDetailInterface = yield call(
      requestGetCryptoById,
      id
    );
    yield put(setCryptoById(response));
  } catch (error) {
    console.log(error);
  }
}
