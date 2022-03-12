var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World! This is creators-ink v3"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
