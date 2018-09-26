const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "./dictionaries",
    directoryListing: true
  });
})

var port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Running on http://localhost:' + port);
});