const arr = [5, 1, 3, 2, 6];
// Transformation logic:
function binary(x) {
	return x.toString(2);
}
const binaryArr = arr.map(binary);

// The above code can be rewritten as :
// const binaryArr = arr.map(function binary(x) {
// 	return x.toString(2);
// }

// // OR -> Arrow function
// const binaryArr = arr.map((x) => x.toString(2));