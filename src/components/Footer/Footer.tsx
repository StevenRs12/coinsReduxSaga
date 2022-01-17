const namespace = "footer";

export const Footer = () => {
  return (
    <div className={`${namespace}__container`}>
      <label className={`${namespace}__text`}>
        Copyright© 2022 CryptoAPP.com. Todos los derechos reservados. <br></br>{" "}
        Copyright© 2022 CryptoAPP.com Colombia S.A. NIT 123.456.789-0 Dirección
        Carrera 7 # 1 - 1 Teléfonos 123123123 - 01 8000 111 111
      </label>
    </div>
  );
};

export default Footer;
