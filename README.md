# Node.js First Class & JavaScript Concepts

## About This Project
This project contains code and notes from the first class of Node.js, focusing on JavaScript fundamentals and practical coding examples.

## Node.js First Class Topics
- Introduction to Node.js
- Setting up Node.js environment
- Running JavaScript with Node.js (`node script.js`)
- Understanding the Node.js runtime
- Writing and executing your first Node.js script


## JavaScript Concepts Demonstrated
- **Variables and Data Types**: Using `var` to declare arrays and objects.
- **Array Methods**:
  - `forEach`: Iterates over each element (does not return a new array).
  - `map`: Creates a new array by applying a function to each element.
  - `filter`: Creates a new array with elements that pass a test.
  - `find`: Returns the first element that matches a condition.
  - `indexOf`: Finds the index of a value in an array.
- **Objects**: Key-value pairs, accessing properties, and using `Object.freeze` to make objects immutable.
- **Functions**: Function expressions and return values.
- **Asynchronous JavaScript**: Mentioned as a topic for future exploration.

## Using `require` to Load Packages
Node.js uses the `require` function to load built-in or external modules (packages). When you use `require('module-name')`, Node.js looks for the module in its core modules or in the `node_modules` directory. This allows you to use additional functionality in your scripts.

Example:
```js
const fs = require('fs'); // Loads the File System module
const http = require('http'); // Loads the HTTP module
```

## Working with `fs` and `http` Modules

- **fs (File System) Module**: Allows you to interact with the file system, such as reading and writing files.
  - Example:
    ```js
    const fs = require('fs');
- **http Module**: Enables you to create web servers and handle HTTP requests and responses.
  - Example:
    const server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello, World!');
    });
    server.listen(3000, () => {

To run the server, execute:
```
node script.js
```
and visit `http://localhost:3000/` in your browser.

## Example Code Highlights
```js
var arr = [1, '2', 3, 4];
arr.forEach(function(val){
   val = val + " Hello"
});

var ans = arr.map(function(val){
	return 14;
});
console.log(ans);

var filterans = arr.filter(function(val){
	else return false;
});
console.log(filterans);

var findans = arr.find(function(val){
	if (val === 2) return val;
});
console.log(findans);

var anss = arr.indexOf(12);
console.log(anss);

var obj = {
	name: "Hasnain",
	age: 23,
};
Object.freeze(obj);

# Node.js Learning Journey & JavaScript Concepts

## About This Project
This project documents my learning journey in Node.js and JavaScript. For each class and commit, I summarize the concepts and topics I have learned, focusing on understanding and progression rather than code samples.

## Class & Commit Summaries

### First Class
- Introduction to Node.js and its environment
- How to run JavaScript using Node.js
- Understanding the Node.js runtime and basic script execution
- JavaScript fundamentals: variables, data types, arrays, objects, and functions
- Key array methods: forEach, map, filter, find, indexOf
- Difference between objects and arrays, and the concept of immutability with Object.freeze

### Subsequent Learning (as commits progress)
- The use of `require` to load built-in and external Node.js modules
- Understanding how Node.js resolves and loads packages
- Introduction to the `fs` (File System) module for file operations
- Introduction to the `http` module for creating and running a basic web server
- The importance of modularity and using Node.js core modules to extend functionality

---

With each class and commit, I continue to add new concepts and deepen my understanding of Node.js and JavaScript. This README will be updated to reflect my ongoing progress and learning milestones.
