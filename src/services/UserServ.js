export const verifyToken = async (token) => {
  const url = 'http://localhost:3001/user/authToken';
  let resp = await fetch(url, {
    headers: {
      'x-auth-token': token,
    },
  });
  let data = await resp.json();
  return data;
};

export const userLogin = async (user) => {
  const url = 'http://localhost:3001/user/login';
  let resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  let data = await resp.json();
  return data;
};

export const userSignup = async (user) => {
  const url = 'http://localhost:3001/user/signup';
  let resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  let data = await resp.json();
  return data;
};

export const userAddToCart = async (id, cart) => {
  const url = `http://localhost:3001/user/cartUpdate/${id}`;
  let resp = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  });
  let data = await resp.json();
  return data;
};

export const userProfileUpdate = async (id, profile, data) => {
  const urlProf = `http://localhost:3001/user/userProfile/${id}`;
  let respProf = await fetch(urlProf, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });
  const urlFile = `http://localhost:3001/user/userAvatar/${id}`;
  let respAv = await fetch(urlFile, {
    method: 'POST',
    body: data,
  });
  let profData = await respProf.json();
  let avData = await respAv.json();
  return { avUp: avData, profUp: profData };
};

export const getUserById = async (id) => {
  const url = `http://localhost:3001/user/single/${id}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};
