const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Middleware");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res) =>{
    console.log("I am hit");
    res.send('Hi, My name is Hasnain')
})

//Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})