import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoById } from "../../actions/cryptoActions";

export const DetailsCrypto = () => {
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoById(params.id));
  }, [dispatch, params]);
  const cryptoInfo = useSelector((state: any) => state);
  console.log(cryptoInfo);
  return <h1>Invoice {params.id}</h1>;
};

export default DetailsCrypto;
