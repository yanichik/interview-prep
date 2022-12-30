let express = require("express");
let app = express();
let bodyParser = require("body-parser");
require("dotenv").config();

app.use((req, res, next) => {
	// console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/json", (req, res) => {
	// const htmlFilePath = __dirname + "/views/index.html";
	// const staticAssetPath = __dirname + "/public";
	// res.send("Hello Express");
	// app.use("/public", express.static(__dirname + "/public"));
	// res.sendFile(htmlFilePath);
	res.json(
		process.env.MESSAGE_STYLE === "uppercase"
			? { message: "HELLO JSON" }
			: { message: "Hello json" }
	);
});

app.get(
	"/now",
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res, next) => {
		res.json({ time: req.time });
	}
);

app.get("/:word/echo", (req, res) => {
	res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
	let first = req.query.first;
	let last = req.query.last;
	res.json({ name: `${first} ${last}` });
});

app.post("/name", (req, res) => {
	let first = req.body.first;
	let last = req.body.last;
	res.json({ name: `${first} ${last}` });
});

// app.route(path).get(handler).post(handler);

module.exports = app;
