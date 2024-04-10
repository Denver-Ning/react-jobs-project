const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('/src/jobs.json');
const middlewares = jsonServer.defaults();
const port = 8000;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
module.exports = server;
