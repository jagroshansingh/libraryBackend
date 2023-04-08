const jsonServer=require('json-server')
const cors=require('cors')
const path=require('path')

const server=jsonServer.create()
const router=jsonServer.router(path.join(__dirname,'db.json'))
const middlewares=jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.listen(8888,()=>{
    console.log('Server is running at 8888')
})