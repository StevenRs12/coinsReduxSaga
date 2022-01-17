import { cryptoInterface } from "../interfaces/crypto.interfaces";
import { types } from "../types/types";

export const setAllCryptos = (cryptos: cryptoInterface[]) => ({
  type: types.setAllsCryptos,
  payload: cryptos,
});

export const getAllCryptos = () => ({
  type: types.getAllsCryptos,
});
