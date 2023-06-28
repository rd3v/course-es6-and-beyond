let arr = [1,2,3]
console.log("arr:", arr)
console.log("for of:")
for (item of arr) { // get item of array
    console.log(item)
}
console.log("for in")
for(item in arr) { // get index in array
    console.log(item)
}

let obj = {a:1, b:2, c:3}
console.log("obj:", obj)
console.log("Object.entries(obj):", Object.entries(obj)) // turns object into multidimensional array
 
for ([key, value] of Object.entries(obj)) { // get key and value of multidimensional array
    console.log(`key: ${key}, value: ${value}`)
}

for (key in obj) { // get key in object
    console.log(key)
}