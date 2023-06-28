let arr = [1, 2, [3, 4, [5, 6]]]
console.log("arr:", arr) // arr: [ 1, 2, [ 3, 4, [ 5, 6 ] ] ]
let flat1 = arr.flat(1)
console.log("flat1:", flat1) // flat1: [ 1, 2, 3, 4, [ 5, 6 ] ]
let flat2 = arr.flat(2)
console.log("flat2:", flat2) // flat2: [ 1, 2, 3, 4, 5, 6 ]
