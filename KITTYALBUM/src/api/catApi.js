const API_ENDPOINT = "https://api.thecatapi.com/v1";
export async function Api() {
  try {
    return fetch(API_ENDPOINT + "/images/search?limit=100")
      .then((response) => response.json())
      .then();
  } catch (e) {
    console.log(e);
    return e;
  }
}
