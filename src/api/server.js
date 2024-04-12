import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('jobsJson.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}))
server.use(router)
server.listen(8000, () => {
    console.log('JSON Server is running')
})
export default server
