import {
  cryptoDetailInterface,
  cryptoInterface,
} from "../interfaces/crypto.interfaces";
import { types } from "../types/types";

export const setAllCryptos = (cryptos: cryptoInterface[]) => ({
  type: types.setAllCryptos,
  payload: { allCoins: cryptos },
});

export const getAllCryptos = () => ({
  type: types.getAllsCryptos,
});

export const setCryptoById = (crypto: cryptoDetailInterface[]) => ({
  type: types.setCryptoById,
  payload: { infoCoin: crypto[0], infoMarkets: crypto[1] },
});

export const getCryptoById = (id: string | undefined) => ({
  type: types.getCryptoDetailsById,
  id,
});
