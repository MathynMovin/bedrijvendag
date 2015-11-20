var express = require("express");
var request = require("request");

var app = express();

// Retrieves a single smartphone
app.get("/getsmartphone/:name", function(req, res) {
	res.send("I don't know where '" + req.params.name + "' is");
});

// Retrieves all smartphones
app.get("/getsmartphones", function(req, res) {
	res.send([
		{
			name: "Mathyn",
			position: [52, 7]
		},
		{
			name: "Someone else",
			position: [52, 6]
		}
	]);
});

// Gets the complete movement history for a single smartphone.
app.get("/smartphonehistory/:name", function(req, res) {
	res.send([
		[52, 7],
		[52, 6],
		[51, 5]
	]);
});

// Handles serving all static files. Used for displaying the web page.
app.use("/", express.static("./"));

// Start listening on port 1337 for requests
var server = app.listen(1337, function() {
	console.log("Listening on port 1337");
});