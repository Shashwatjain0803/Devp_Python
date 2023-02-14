// Pure funtions 
function s1(s){
    square = s*s
    return square
}

console.log(s1(5))

// pure function 
3
function s2(username , password){
    if(username == "admin" && password == "admin"){
        console.log("login sucees")
    }else{
        console.log("login failed")
    }
}

s2("admin" , "admin")


function s3(username , password){
    username = "system"
    if(username == "admin" && password == "admin"){
        console.log("login sucees")
    }else{
        console.log("login failed")
    }
}

s3("admin" , "admin")

//impure function
let a = [10,20,30]
function s4(element){
    a.push(element)
    console.log(a)
}

s4(40)