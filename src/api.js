export default path =>
  fetch(`https://erodionov-adidas-fake-api.now.sh/${path}`).then(res => res.json());
