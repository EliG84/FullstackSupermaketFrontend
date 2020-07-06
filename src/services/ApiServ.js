export const apiGet = async () => {
  const url = 'https://aqueous-brook-65256.herokuapp.com/api';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiGetCat = async (cat) => {
  const url = `https://aqueous-brook-65256.herokuapp.com/api/${cat}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiSearch = async (searchQ) => {
  console.log(searchQ);
  const url = `https://aqueous-brook-65256.herokuapp.com/api/search/${searchQ}`;
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  return data;
};
