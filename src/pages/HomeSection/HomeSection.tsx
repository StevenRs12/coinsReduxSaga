import { useNavigate } from "react-router-dom";
const cryptoImg = require("../../assets/images/cryptoImg.png");

const namespace = "home";

export const HomeSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${namespace}__container`}>
      <div className={`${namespace}__container-img`}>
        <img src={cryptoImg} alt="crypto" />
      </div>

      <div className={`${namespace}__container-text`}>
        <label className={`${namespace}__text`}>
          Welcome, check the details of the most important cryptocurrencies and
          exchange rate
        </label>
        <hr className={`${namespace}__line`} />
        <button
          className={`${namespace}__btn`}
          onClick={() => navigate("/info-crytpos")}
        >
          Go To Crypto Information
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
