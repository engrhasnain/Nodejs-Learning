const express = require('express');
const path = require('path')

const app = express();

//these are the form parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
//set ejs
app.set('view engine', 'ejs');

//this is middleware
app.use((req,res,next)=>{
    console.log("Middleware");
    next();
})



//learn ejs, express dynamic routing, and folder structures
app.get('/ejs', (req, res)=>{
    res.render('index');
})

app.get('/profiles/:username', (req,res) =>{
    res.send(`Welcome ${req.params.username}`);
})

app.get('/profiles/:username/:age', (req,res) =>{
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`);
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