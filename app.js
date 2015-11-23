var express = require("express");
var request = require("request");

var app = express();

// Retrieves a single smartphone
app.get("/getsmartphone/:name", function(req, res) {
	// Dummy data, always returns found = true
	res.send({
		found: true,
		name: req.params.name,
		position: [0, 0],
		floor: 0
	});
});

// Retrieves all smartphones
app.get("/getsmartphones", function(req, res) {
	// Dummy data
	res.send([
		{
			name: "Mathyn",
			position: [6.079281241290334, 52.501251625059666],
			floor: 5
		},
		{
			name: "Tim",
			position: [6.079271241290334, 52.501241625059666],
			floor: 5
		}
	]);
});

// Gets the complete movement history for a single smartphone.
app.get("/smartphonehistory/:name", function(req, res) {
	// Dummy data
	res.send([
		[6.079281241290334, 52.501251625059666, 5],
		[6.079281241290334, 52.501251625059666, 5],
		[6.079281241290334, 52.501251625059666, 5]
	]);
});

// Handles serving all static files. Used for displaying the web page.
app.use("/", express.static("./"));

// Start listening on port 1337 for requests
var server = app.listen(1337, function() {
	console.log("Listening on port 1337");
});