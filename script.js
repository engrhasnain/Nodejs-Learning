//fundamental of js
//arrays and objects
//functions return 
//async js coding

var arr = [1,'2',3,4];
//foreach, map, filter, find, indexOf learning it

arr.forEach(function(val){
   val = val + " Hello"
   console.log(val);
})

// map is creating new array for what we have, a blank and do the 
// operation based on what we have in the original array

//foreach is a simple forloof and return nothing 
//while map return an array of samelength of the original arr

var ans = arr.map(function(val){
    return 14;
})  

console.log(ans)

//filter is used to make a new array based on original 
// it might be the of same lenght of smaller than the orignal ones
var filterans = arr.filter(function(val){
    if(val > 1) {return true;}
    else return false;
})

console.log(filterans)


var findans = arr.find(function(val){
    if (val === 2) return val;
})

console.log(findans)

//indexOf and find both works for finding an element
//but the indexOf return the index and find return the value
var anss = arr.indexOf(12) 
console.log(anss)


//objects arre key value pair and unordered and can access it 
//through the index and as well by the key, example

var obj = {
    name: "Hasnain",
    age: 23,
}

Object.freeze(obj) //a concept to freeze make the obj non-mutable
console.log(obj.age)
console.log(obj.name)


//function are objects in js, and function is a way of doing the works, good for reusbale concept of coding
function abcd(){
    return 12;
}


var ob = abcd();
console.log(ob)

//async js coding
async function ab(){
    //fetch is non blocking
    var blog = await fetch(`https://randomuser.me/api/`);
    var ans = await blog.json();
    console.log(ans.results[0].name)
}

ab();


//exploring node js, npm init, a package like fs how to insert it and use it
const fs = require('fs');

fs.writeFile("hey.txt", "hello word", function(err){
    if(err) console.error(err);
    else console.log("Done");
})

//explore the file system with this fs module, where we explore copyfile, unlink, rm, append etc..


//also explore the https

const http = require('http')

const server = http.createServer(function(req, res){
    res.end("Hello word")
})

server.listen(3000);