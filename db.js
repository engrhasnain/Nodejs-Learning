const express = require('express')

app = express();

const userModel = require('./usermodel');

app.get('/', (req,res)=>{
    res.send("Hasnain");
})

app.get('/create', async(req, res) =>{
let createuser = await userModel.create({
    name: "Hasnain",
    email: "hasnain@gmail.com",
    username: "has"
})
res.send(createuser);
})

app.get('/update', async(req, res) =>{
let createuser = await userModel.findOneAndUpdate({username: "has"}, {name: "Hasnain Pirzada"}, {new: true})
res.send(createuser);
})

app.get('/delete', async(req, res) =>{
let createuser = await userModel.findOneAndDelete({username: "has"})
res.send(createuser);
})

app.get('/read', async(req, res) =>{
let createuser = await userModel.find();
res.send(createuser);
})



app.listen(3000);