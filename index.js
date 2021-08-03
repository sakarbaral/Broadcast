const express=require('express');
const app=express();
const server=require('http').createServer(app);
const io=require('socket.io')(server,{cors:{origin:"*"}});

app.set("view engine","ejs");

app.get('/home',(req,res)=>{
    res.render('home');
});

server.listen(3001,()=> {
    console.log("Server is running");
});

io.on("connection",(socket)=>{
    console.log("Socket id is :" +socket.id);
    
    socket.on("name",(data)=>{
        socket.broadcast.emit('name',data);
    })
    socket.on("message",(data)=>{
        socket.broadcast.emit('message',data)
        
        // console.log(data);
        // console.log(data['message']);
    });


})