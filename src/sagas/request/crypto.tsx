const urlAPICrypto = "https://api.coinlore.net/api/";

export async function requestGetAllCrypto() {
  return (
    await fetch(urlAPICrypto + "tickers/", {
      method: "GET",
    })
  ).json();
}

export async function requestGetCryptoById(id: string) {
  return (
    await fetch(urlAPICrypto + "ticker/?id=" + id, {
      method: "GET",
    })
  ).json();
}

export async function requestGetMarketsById(id: string) {
  return (
    await fetch(urlAPICrypto + "coin/markets/?id=" + id, {
      method: "GET",
    })
  ).json();
}
