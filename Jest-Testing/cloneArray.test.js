const { expect } = require("@jest/globals");
const cloneArray = require("./cloneArray");
test("properly clones arrays", () => {
	const array = [1, 2, 3];
	//This won't work as it's not the same array, just same values.
	//expect(cloneArray(array)).toBe(array);
	expect(cloneArray(array)).not.toBe(array);
	expect(cloneArray(array)).toEqual(array);
});
