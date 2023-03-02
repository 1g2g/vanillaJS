export default async function callApi() {
  const URL = `./web/src/data/new_data.json`;
  const res = await fetch(URL);
  return await res.json();
}
