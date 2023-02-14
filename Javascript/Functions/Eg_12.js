// rest operator 
// normal functions with arguments keyword
function s1(){
    console.log(arguments)
}

s1(10,20)
s1(10,20,30,40,50,60)

// using for loop with arguments keyword 
function s2(){
    for (let i in arguments){
        console.log(i,arguments[i])
    }
}

s2(10,20)
s2(10,20,30,40,50)

// rest operator
function s3(...args){
    console.log(...args)
}
s3(1,2,3)
s3(10,20,0,40,50,65)