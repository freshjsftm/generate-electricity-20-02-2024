const http = require("node:http");
const app = require("./app");

const PORT = 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
