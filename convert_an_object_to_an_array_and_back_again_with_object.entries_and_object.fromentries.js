const obj = {a:1, b:2, c:3}
console.log("obj:", obj) // obj: { a: 1, b: 2, c: 3 }
const arr = Object.entries(obj)
console.log("Object.entries(obj):", arr) // Object.entries(obj): [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log("Object.fromEntries(arr):", Object.fromEntries(arr)) // Object.fromEntries(arr): { a: 1, b: 2, c: 3 }