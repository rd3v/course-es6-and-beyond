let arr = [1, 2, 3]
console.log("arr:", arr) // arr: [ 1, 2, 3 ]
let copy = [...arr]
console.log("copy from arr:",copy) // copy from arr: [ 1, 2, 3 ]
arr.push(4)
console.log("arr after push:", arr) // arr after push: [ 1, 2, 3, 4 ]
console.log("copy:", copy) // copy: [ 1, 2, 3 ]