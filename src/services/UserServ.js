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
