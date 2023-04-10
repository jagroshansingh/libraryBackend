const jsonServer=require('json-server')
const cors=require('cors')
require('dotenv').config()
// const http=require('http')
// console.log(http)

const server=jsonServer.create()
const router=jsonServer.router('db.json')
const middlewares=jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.listen(process.env.PORT,()=>{
    console.log('Server is running at 8888')
})