const chonkArray = require("./chonk");

test("chonk function exists", () => {
	expect(chonkArray).toBeDefined();
});

test("chonk an array of 10 values with a length of 2", () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const len = 2;
	//testing this array got built
	const chunkedArr = chonkArray(numbers, len);
	expect(chunkedArr).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});
