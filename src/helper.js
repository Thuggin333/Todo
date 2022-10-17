export default async function myFetch(url, method) {
  return fetch(url, { method })
    .then((res) => res.json())
    .then((res) => res);
}
