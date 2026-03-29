const express = require('express');
const fs = require("fs");


const path = require('path')

const app = express();

//these are the form parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/files', express.static(path.join(__dirname, 'files')));

//set ejs
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    fs.readdir(`./files`, function(err, files){
        console.log(files);
        res.render('index', {files: files});
    })
})

app.post('/create', (req, res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");
    })

    console.log(req.body)
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})