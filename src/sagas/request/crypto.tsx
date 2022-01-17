const urlAPICrypto = "https://api.coinlore.net/api/tickers/";

export async function requestGetAllCrypto() {
  return (
    await fetch(urlAPICrypto, {
      method: "GET",
    })
  ).json();
}
