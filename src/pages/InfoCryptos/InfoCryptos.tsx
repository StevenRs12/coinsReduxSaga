import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCryptos } from "../../actions/cryptoActions";
import { cryptoInterface } from "../../interfaces/crypto.interfaces";

export const InfoCryptos = () => {
  const namespace = "info-crypto";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCryptos());
  }, [dispatch]);

  const cryptosInfo: cryptoInterface[] = useSelector(
    (state: any) => state.crypto.data
  );
  console.log(crypto);
  return (
    <div className={`${namespace}__container`}>
      {cryptosInfo?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {cryptosInfo.map((p) => (
              <tr>
                <td>{p.name}</td>
                <td>${p.symbol}</td>
                <td>{p.price_usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InfoCryptos;
