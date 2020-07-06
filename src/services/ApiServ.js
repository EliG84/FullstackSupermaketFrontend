export const apiGet = async () => {
  const url = 'https://109.65.4.76/api';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiGetCat = async (cat) => {
  const url = `https://109.65.4.76/api/${cat}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiSearch = async (searchQ) => {
  console.log(searchQ);
  const url = `https://109.65.4.76/api/search/${searchQ}`;
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  return data;
};
