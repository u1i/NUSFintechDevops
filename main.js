const express = require("express");


var app = express();

app.use(express.static('public')); 

//make way for some custom css, js and images
//app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
//app.use('/images', express.static(__dirname + '/public/images'));

// IUse redirect the page from / to /fx.html
app.get("/", (request,response) => {
    response.redirect('/FX.html') 
});


//Create a port - http:localhost:3000 
//To access to the html via express static - http:localhost:3000/fx.html
app.listen(3000,(errors) => {
    if(errors) {
        console.log("Server couldn't start. Error: "+errors);
    } else {
        console.log("Server started on port 3000")
    }
});