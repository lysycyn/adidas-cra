export const get = path =>
  fetch(`https://erodionov-adidas-fake-api.now.sh/${path}`).then(res => res.json());

export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json());
