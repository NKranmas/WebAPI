//required middleware for this code to run 
var http = require("http"); //incuded in node 
var Mustache = require("mustache"); //from npm
var rndNum = require("./randomnum"); // custom

//sample use of mustache template
var msg = Mustache.render("Hello, {{firstname}} {{lastname}} how are you today?", {firstname:"Nicholas", lastname:"Kranmas"}); 

//this is going to handle incoming HTTP requests
function reqHandler(req, res){
    console.log("We have a server request from " + req.url);

    if(req.url === "/"){
        res.end("wlecome to my homepage");
    }
    else if (req.url === "/about"){
        res.end("ths is the about page");
    }
    else if (req.url === "/contact"){
        res.end(msg + " " + rndNum());
    }
    else{
        res.end("Page Not Found");
    }
}

//outputs
console.log(msg);
console.log(rndNum());
console.log(rndNum());

//create and start server 
var server = http.createServer(reqHandler);
server.listen(3000);

