let arr = [1,2,3]
console.log("arr:", arr) // [ 1, 2, 3 ]
let mapped = arr.map(el => [el, el * 2])
console.log("mapped:", mapped) // [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]
console.log("mapped.flat():", mapped.flat()) // [ 1, 2, 2, 4, 3, 6 
console.log("arr.flatMap(el => [el, el * 2]):", arr.flatMap(el => [el, el*2])) // [ 1, 2, 2, 4, 3, 6 ]