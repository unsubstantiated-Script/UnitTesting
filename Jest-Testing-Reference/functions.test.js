const functions = require("./functions");

test("adding function test", () => {
	//Jest syntax expect, function, to be = result
	expect(functions.add(2, 2)).toBe(4);
});

test("adds 2+2 to not equal 5", () => {
	//Jest syntax expect, function, to be = result
	expect(functions.add(2, 2)).not.toBe(5);
});

/* Check for truthy & falsy values 
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of above
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false */

test("should be null", () => {
	//Jest syntax expect, function, to be = result
	expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
	//Jest syntax expect, function, to be = result
	expect(functions.checkValue(0)).toBeFalsy();
});

//Testing an object
test("User should be Just Object", () => {
	//Jest syntax expect, function, to be = result
	expect(functions.createUser()).toEqual({
		firstName: "Justo",
		lastName: "Fulto",
	});
});

//<  and >
test("Should be under 1600", () => {
	const load1 = 800;
	const load2 = 170;
	expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test("Dere is no I in team", () => {
	expect("team").not.toMatch(/I/i);
});

//Arrays
test("Admin should be in userNames", () => {
	userNames = ["jimmbo", "steril", "freyLance", "admin"];
	expect(userNames).toContain("admin");
});

//Working with async data .then chaining
// test("User fetched name should be Leanne Graham", () => {
// 	//used for async code makes sure the .then gets called
// 	expect.assertions(1);
// 	return functions
// 		.fetchUser()
// 		.then((data) => expect(data.name).toEqual("Leanne Graham"));
// });

//Async/Await
test("User fetched name should be Leanne Graham", async () => {
	//used for async code makes sure the .then gets called
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});
