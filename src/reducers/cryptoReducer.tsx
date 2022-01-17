import { types } from "../types/types";

interface Action {
  type: string;
  payload: any;
}

export const cryptoReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case types.setAllsCryptos:
      return {
        data: action.payload,
      };
    case types.CryptoDetail:
      return {};

    default:
      return state;
  }
};
