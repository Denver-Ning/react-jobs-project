import jsonServer from 'json-server';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const server = jsonServer.create();
const router = jsonServer.router('jobs.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));
server.use(router);
server.listen(8000, () => {
    console.log('JSON Server is running');
});

// Export the Server API
export default server;
