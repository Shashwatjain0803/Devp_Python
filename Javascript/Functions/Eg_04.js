// types of variables 
// global 

var a  = 10 
function s1(){
    console.log(a)
}
console.log(a)
s1()

console.log(a)

// local 
function s2(){
    var b = 20 
    var c = 30
    console.log(b , c)
}
// console.log(b , c) ReferenceError: b is not defined
s2()
