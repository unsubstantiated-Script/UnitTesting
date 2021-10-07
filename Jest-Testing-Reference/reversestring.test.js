const reverseString = require("./reversestring");

test("reverse string function exists", () => {
	expect(reverseString).toBeDefined();
});

test("string reverses?", () => {
	expect(reverseString("hello")).toEqual("olleh");
});

test("string reverses with uppercase?", () => {
	expect(reverseString("Hello")).toEqual("olleh");
});
