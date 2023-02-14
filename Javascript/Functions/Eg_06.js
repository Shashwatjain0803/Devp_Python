//  function calling 
function s1(){
    console.log("s1 function")

    s2()

}

function s2(){
    console.log("s2 function")
}

s1()

// assigning a function to a varibale
let s = function s3(){
    return "s3 function"

}

s()
console.log(s())
console.log(s)  // [functions : s3]