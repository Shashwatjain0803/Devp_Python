// high order functions
// A function  that takes as argument or return a function

let s1 = function(){
    return function(){
        console.log("s1 function")
    }

}
console.log(s1) // [function : s1]

let s2 = s1()
console.log(s2)
s2()