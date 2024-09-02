////////////////////
//1. how to install package globally*****
// how to install and setup node or npm packages****
//install nodemon 
// nodemon is kinda development server which tracks all the changes done to a file***
// so we don't have do like ==>> node index  for every time 
// nodemon will does it for us when we save the file*****
//1. to install nodemon
// type ===>>> npm add or install or i 
// node i nodemon -g
//**********************
//console.log("Hello Bro!");
// to run👇
// nodemon filename (if the file index.js then no need to write index the nodemon will automatically look for index.js file);
// wait I got something that preventing to run nodemon 
// it's the powerShell security policy
/* to fix powerShell's security policy 
1. open windows powerShell or terminal admin 
2. then run this command ===>>> Set-ExecutionPolicy RemoteSigned
3. hit enter
4. and comeback and run nodemon again it should work (in my case it worked!);
*/
//so let's try nodemon 
/*
console.log("Hi, I'm xian!");

function helloWorld() {
    console.log("hello world!");
}

helloWorld();
*/
// to exit nodemon 
//👉👉👉👉press control + c👈👈👈👈
////////////////////////////////////////////////
//2. how to install packages for our project 
// ===>>> inorder to do that first we need to initialize npm 
// npm init
// this will ask us few quetions
// then we get a new package.json file 
// so now we need to install the package that we need for our project
// I'm gonna install date-fns (which is node package for date functions);
// npm i date-fns
//👉👉 we see a new package-lock.json file which we don't wanna touch anything inside****
// inside package.json now we can see dependencies****
// and we also see a node_modules folder which is large data dependencies folder
// It is important to have node_modules under .gitignore file****
/* I checked my git repo after this and there was no node_modules folder **/
////////////////////////////////////////////////////////////////
//3. how to install a devDependency
// let's install nodemon as a devDependency
//===>>> npm i nodemon --save-dev 
//👉👉short hand way ===>>> npm i nodemon -D
// after installing we can see a nodemon added to devDependencies in package.json file
////////////////////////////////
//let's talk about scripts
// like we do in React like npm run dev 
// there are like "start" "dev" "build" scripts
// Let's add "start" and "dev" scripts
// add "start":"node index"
// and make "test" ===>>> "dev" (we don't need that "test" script anymore);
// and have "test":"nodemon index" (worth mentioning you don't have to add index here because nodemon defaults to index anyway);
// npm start (start is the only word that runs without run keyword); (note: here we don't want to do that because the project is already initialized);
// npm run dev
////////////////////////////////////////////////////////////
// Let's work with our dependency (date-fns);

///const date = require('date-fns');
//just requiring the format from date
const { format } = require('date-fns');

console.log(format(new Date() , 'yyyyMMdd\tHH:mm:ss'));
console.log("hello");
























