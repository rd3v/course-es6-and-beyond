let obj = {a:1, b:2, c:3}
console.log("obj:", obj) // obj: { a: 1, b: 2, c: 3 }
let copy = {...obj}
console.log("copy", copy) // copy { a: 1, b: 2, c: 3 }
copy['d'] = 4
console.log("copy:", copy) // copy: { a: 1, b: 2, c: 3, d: 4 }
console.log("obj:", obj) // obj: { a: 1, b: 2, c: 3 }
