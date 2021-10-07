const axios = require("axios");

const functions = {
	add: (a, b) => a + b,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = {
			firstName: "Justo",
		};
		user["lastName"] = "Fulto";
		return user;
	},
	fetchUser: () =>
		axios
			.get("https://jsonplaceholder.typicode.com/users/1")
			.then((rest) => rest.data)
			.catch((err) => "error"),
};

module.exports = functions;
