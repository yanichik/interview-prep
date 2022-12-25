var _ = require("Underscore");
const someEl = {
	a: { b: { c: { d: { name: "d" }, e: {}, f: {} } } },
	g: { h: { i: {} } },
	j: { k: { name: "k", l: { m: {}, n: { name: "n" } } } },
};

const output = {
	a: { b: { c: { d: { name: "d" } } } },
	j: { k: { name: "k", l: { n: { name: "n" } } } },
};

function removeEmpty(obj) {
	return Object.entries(obj).reduce(
		(a, [k, v]) => (v ? ((a[k] = v), a) : a),
		{}
	);
}

cleanObject = function (object) {
	Object.entries(object).forEach(([k, v]) => {
		if (v && typeof v === "object") cleanObject(v);
		if (
			(v && typeof v === "object" && !Object.keys(v).length) ||
			v === null ||
			v === undefined ||
			v.length === 0
		) {
			if (Array.isArray(object)) object.splice(k, 1);
			else if (!(v instanceof Date)) delete object[k];
		}
	});
	return object;
};
// function removeEmpty(obj) {
// 	let keys = Object.keys(obj);
// 	let internalObjs;
// 	keys.forEach((el) => {});
// }

console.log(cleanObject(someEl));

let ar = [23, 35, 9, 88];
console.log(_.map(ar, (k) => k * 10));
