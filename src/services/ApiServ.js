export const apiGet = async () => {
  const url = 'https://speedtechstore1.herokuapp.com/api';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiGetCat = async (cat) => {
  const url = `https://speedtechstore1.herokuapp.com/api/${cat}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiSearch = async (searchQ) => {
  console.log(searchQ);
  const url = `https://speedtechstore1.herokuapp.com/${searchQ}`;
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  return data;
};
