import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCryptos } from "../../actions/cryptoActions";
import { cryptoInterface } from "../../interfaces/crypto.interfaces";

export const InfoCryptos = () => {
  const namespace = "info-crypto";

  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCryptos());
  }, [dispatch]);

  const cryptosInfo: cryptoInterface[] = useSelector(
    (state: any) => state.crypto.data
  );
  const pageNumbers = [];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cryptosInfo?.slice(indexOfFirstPost, indexOfLastPost);

  for (let i = 1; i <= Math.ceil(cryptosInfo?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={`${namespace}__container`}>
      <label>Title</label>
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
              {currentPosts.map((crypto) => (
                <tr onClick={() => navigate(`/details-crytpo/${crypto.id}`)}>
                  <td>{crypto.name}</td>
                  <td>{crypto.symbol}</td>
                  <td>${crypto.price_usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className={`${namespace}__pagination`}>
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <button onClick={() => paginate(number)}>{number}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCryptos;
