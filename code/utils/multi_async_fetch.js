async function fetchPromise(urls, cb) {
  if (cb && typeof cb === 'function') {
    cb((await Promise.all(
        urls.map(url => {
          let resolve;

          const promise = new Promise(x => resolve = x);
          const options = require('url').parse(url);

          options.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36'
          };

          const req = require('https').request(options, res => {
            if (res.statusCode !== 200) {
              resolve(null);
              return;
            }

            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
              resolve(Boolean(res.headers['content-type'].match('application/json'))
                ? JSON.parse(body)
                : body
              );
            });
          }).on('error', e => {
            console.error(`Error fetching json: ${e}`);
            resolve(null);
          });

          req.end();
          return promise;
        })
    )).map(s => s));
  }
}

fetchPromise([
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/posts/3',
], out => {
  console.log(out);
});