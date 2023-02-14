// rest operator and spread operator
// object

let user  ={
    name : "shashwat jain",
    age : 21,
    contact:[475145444,88541454]
}
console.log(user) //{ name: 'shashwat jain', age: 21, contact: [ 475145444, 88541454 ] }

// rest operator using object
let {name,age,...r} = user
console.log(user.name) // shashwat jain
console.log(user.age) // 21
console.log(r)

// spread operator using object

let  newuser ={
    ...user
}
console.log(newuser)