import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCryptos } from "../../actions/cryptoActions";
import { cryptoInterface } from "../../interfaces/crypto.interfaces";
import { numberFormat } from "../../utils/utils";
import { Loader } from "../../components/Loader";

export const InfoCryptos = () => {
  const namespace = "info-crypto";

  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordFilter, setWordFilter] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCryptos());
  }, [dispatch]);

  const cryptosInfo: cryptoInterface[] = useSelector(
    (state: any) => state?.crypto?.data?.allCoins
  );
  const pageNumbers = [];
  const currentCoins = cryptosInfo;
  for (let i = 1; i <= Math.ceil(cryptosInfo?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const search = (word: string) => {
    setWordFilter(word.toLowerCase());
    setCurrentPage(1);
  };
  if (currentCoins === undefined) {
    return <Loader />;
  }
  return (
    <div className={`${namespace}__container`}>
      <label className={`${namespace}__title`}>
        Crypto currency information and dollar exchange rate
      </label>
      <div className={`${namespace}__search`}>
        <input
          className={`${namespace}__input-text`}
          type="text"
          placeholder="Search by name or symbol coins"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>

      <div className={`${namespace}__container-table`}>
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
              {currentCoins
                .filter(
                  (e) =>
                    e.name.toLowerCase().includes(wordFilter) ||
                    e.symbol.toLowerCase().includes(wordFilter)
                )
                .map((crypto, pos) => (
                  <>
                    {currentPage * 10 > pos && (currentPage - 1) * 10 <= pos && (
                      <tr
                        onClick={() => navigate(`/details-crytpo/${crypto.id}`)}
                      >
                        <td>{crypto.name}</td>
                        <td>{crypto.symbol}</td>
                        <td>{numberFormat(+crypto.price_usd)}</td>
                      </tr>
                    )}
                  </>
                ))}
            </tbody>
          </table>
        )}
      </div>

      <div className={`${namespace}__pagination`}>
        {pageNumbers.map((number) => (
          <div key={number} className={`${namespace}__page`}>
            <button
              onClick={() => paginate(number)}
              className={`${namespace}__btn`}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
      <div className={`${namespace}__pagination-info`}>
        Pagina {currentPage} de 10
      </div>
    </div>
  );
};

export default InfoCryptos;
