const express =require('express');
const app=express();  //app -> express is created a server
const port= process.env.PORT || 3000;


const http =require('http');
const server = http.createServer(app); // we created a server by  own //so we use server.listen()

//db
const a=require('./db/mongoose')
a()
//model
const Users=require('./model/user-model')
const Job=require('./model/job-model')

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization,Orgin,X-Requested-With,Accept');
    next();
});

//routers
const userRouter=require('./router/user-router')
app.use(userRouter)

const jobRouter=require('./router/job-router')
app.use(jobRouter)

server.listen(port,()=>{
    console.log(`The server is running in port ${port}`)
})
