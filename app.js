console.log('Hello to Node.js!');

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});



/*const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);


const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', chunk => data += chunk);

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

});

const myModule = require('./my-module');
console.log(myModule.myFunction()); 




const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve("Success!");
  else reject("Failure!");
});

myPromise
  .then(result => console.log(result))
  .catch(err => console.log(err));




  async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

myFunction();*/