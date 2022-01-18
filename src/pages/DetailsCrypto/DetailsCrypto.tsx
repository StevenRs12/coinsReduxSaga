import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoById } from "../../actions/cryptoActions";
import { detailCoinMarketInterface } from "../../interfaces/crypto.interfaces";
import { numberFormat } from "../../utils/utils";
import { Loader } from "../../components/Loader";
const coinImg = require("../../assets/images/coin.png");

export const DetailsCrypto = () => {
  const params = useParams();
  const namespace = "details-crypto";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoById(params.id));
  }, [dispatch, params]);
  const cryptosInfo: detailCoinMarketInterface = useSelector(
    (state: any) => state?.crypto?.data
  );
  const { infoCoin, infoMarkets } = cryptosInfo;
  if (infoCoin === undefined || infoMarkets === undefined) {
    return <Loader />;
  }
  return (
    <div className={`${namespace}__container`}>
      {infoCoin?.map((coin) => (
        <div
          key={`${coin?.id}-${coin?.symbol}`}
          className={`${namespace}__card-title`}
        >
          <div className={`${namespace}__container-title`}>
            <label className={`${namespace}__title`}>{coin.name} </label>
            <label className={`${namespace}__sub-title`}>({coin.symbol})</label>
          </div>
          <label className={`${namespace}__sub-title`}>
            Price(USD): {numberFormat(+coin.price_usd)}
          </label>
          <img
            src={coinImg}
            className={`${namespace}__container-img`}
            alt="img-coin"
          />
        </div>
      ))}
      <div className={`${namespace}__sub-title margin-btn-16`}>
        Top 10 Cryptocurrency Markets
      </div>
      <div className={`${namespace}__container-markets-head`}>
        <div className={`${namespace}__market-item text-semibold`}>
          Market (quote)
        </div>
        <div className={`${namespace}__market-item text-semibold`}>
          Price (USD)
        </div>
      </div>
      {infoMarkets?.slice(0, 10).map((market) => (
        <div
          key={`${market?.base}-${market?.name}`}
          className={`${namespace}__container-markets`}
        >
          <div className={`${namespace}__market-item`}>
            {market.name} ({market.base})
          </div>
          <div className={`${namespace}__market-item`}>
            {numberFormat(market.price_usd)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsCrypto;
