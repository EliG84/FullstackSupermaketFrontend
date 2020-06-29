export const apiGet = async () => {
  const url = 'http://localhost:3001/api';
  let resp = await fetch(url);
  let data = await resp.json();
  return data.data;
};
