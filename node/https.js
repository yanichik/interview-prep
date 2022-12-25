/* 
EMCEE Assessment Q:
Write async function that outputs a promise containing data object from 
GET response. Ensure handles http and https

 */

const https = require("https");
const http = require("http");
const url = "http://jsonplaceholder.typicode.com/users";
let isHttps = url.slice(0, 6).includes("https") ? true : false;
const myResolve = (res, data, resolve) => {
	res.on("data", (chunk) => {
		data += chunk;
	});
	res.on("end", () => {
		resolve(console.log(data));
	});
};
const GetRsvp = async () => {
	return new Promise((resolve) => {
		let data = "";
		if (isHttps) {
			https.get(url, (res) => {
				myResolve(res, data, resolve);
			});
		} else {
			http.get(url, (res) => {
				myResolve(res, data, resolve);
			});
		}
	});
};

(async () => await GetRsvp())();
