const setUrlParams = (url, params) => {
  let quote = "?";
  for (const k in params) {
    const v = params[k];
    url += `${quote + k}=${v}`;
    quote = "&";
  }

  return url
}

const domain = 'https://api.example.com/';

const params = {
  page: 1,
  key: '1234abc',
};

console.log(setUrlParams(domain, params))