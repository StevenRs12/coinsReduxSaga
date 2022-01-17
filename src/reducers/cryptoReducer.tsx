import { types } from "../types/types";

interface Action {
  type: string;
  payload: any;
}

export const cryptoReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case types.setAllCryptos:
      return {
        data: action.payload,
      };
    case types.setCryptoById:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
