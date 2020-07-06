export const verifyToken = async (token) => {
  const url = 'http://109.65.4.76/user/authToken';
  let resp = await fetch(url, {
    headers: {
      'x-auth-token': token,
    },
  });
  let data = await resp.json();
  return data;
};

export const userLogin = async (user) => {
  const url = 'http://109.65.4.76/user/login';
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
  const url = 'http://109.65.4.76/user/signup';
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
  const url = `http://109.65.4.76/user/cartUpdate/${id}`;
  let resp = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  });
  let data = await resp.json();
  return data;
};

export const userProfileUpdate = async (id, profile) => {
  const urlProf = `http://109.65.4.76/user/userProfile/${id}`;
  let resp = await fetch(urlProf, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });
  let data = await resp.json();
  return data;
};

export const userAvatarUpdate = async (id, file) => {
  const urlFile = `http://109.65.4.76/user/userAvatar/${id}`;
  let resp = await fetch(urlFile, {
    method: 'POST',
    body: file,
  });
  let data = await resp.json();
  return data;
};

export const getUserById = async (id) => {
  const url = `http://109.65.4.76/user/single/${id}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};
