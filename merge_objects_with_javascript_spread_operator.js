let obj1 = {a:1, b:2}
console.log("obj1:", obj1)
let obj2 = {c:3, d:4}
console.log("obj2:", obj2)
let obj3 = {...obj1, ...obj2}
console.log("obj3:", obj3)