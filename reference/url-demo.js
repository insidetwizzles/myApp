const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// host / root domain
console.log(myUrl.host);

// hostname (does not include the port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// append to params object
myUrl.searchParams.append('name','addie'); // can only append one key-value pair
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value,key) => console.log(`${key}: ${value}`));