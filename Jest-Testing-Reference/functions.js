const axios = require("axios");

//Lifecycle methods that happen before and after each function in the list
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => {
// 	console.log("db initalized");
// };
// const closeDatabase = () => {
// 	console.log("db closed");
// };

const nameCheck = () => {
	console.log("Checking name");
};

describe("Checking names", () => {
	beforeEach(() => nameCheck());

	test("user is Jeff", () => {
		const user = "Jeff";
		expect(user).toBe("Jeff");
	});

	test("user is Karen", () => {
		const user = "Karen";
		expect(user).toBe("Karen");
	});
});

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
