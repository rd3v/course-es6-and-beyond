let obj = {data: {user: 'Reynaldy'}}
console.log("obj:", obj)
const {data} = obj
console.log("data:", data)
const {data:{user}} = obj
console.log("user:", user)