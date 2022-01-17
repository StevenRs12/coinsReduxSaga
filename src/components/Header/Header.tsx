import { useNavigate } from "react-router-dom";

const logo = require("../../assets/images/logo.png");
const namespace = "header";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={`${namespace}__container`}>
      <img className={`${namespace}__image`} src={logo} alt="Logo" />
      <label className={`${namespace}__title`}>CryptoAPP.</label>
      <label className={`${namespace}__sub-title`}>com</label>
      <button
        className={`${namespace}__btn-home`}
        onClick={() => navigate("/home")}
      >
        Go To Home{" "}
      </button>
    </div>
  );
};

export default Header;
