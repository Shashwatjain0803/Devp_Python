// // var a  = 10
// // var b = 20
// // if (a<b){
// //     console.log("b is greater")
// // }
// // else{
// //     console.log("a is greater")
// // }


// // if(false){
// //    console.log("if block") 
// // }
// // else{
// //     console.log("else block")
// // }

// // usersalary = 8000
// // if (usersalary == 5000){
// //     console.log("usersalary" + usersalary)
// // }else if(usersalary == 6000){
// //     console.log("usersalary" + usersalary)
// // }else if(usersalary == 8000){
// //     console.log("usersalary matched")
// // }else{
// //     console.log("undefined")
// // }

// // for(var i = 0; i<=10;i++){

// //     if(i==5){
// //         // break
// //         continue
// //     }
// //     console.log(i)
// // }

// // let names  = ["sj","vj","rj","pj","vj","yep","home"]
// // console.log(names[3])
// // console.log(names.length)
// // for(let i= 0; i < names.length; i++){
// //     console.log(names[i])
// // }
// // console.log(names.indexOf("rj"))
// // console.log(names.indexOf("yj"))
// // console.log(names.indexOf("j"))
// // console.log(names.includes("jj"))
// // console.log(names.includes("sj"))
// // console.log(names.push("family"))
// // console.log(names.length)
// // console.log(names)
// // console.log(names.pop())
// // console.log(names)
// // console.log(names.shift())
// // console.log(names.unshift("family"))
// // console.log(names)
// // console.log(names.indexOf("family"))

// // console.log(names.slice(2,8))
// // console.log(names.slice(-3,-1))
// // console.log(names.splice(4))
// // console.log(names)
// // console.log(names.splice(1))
// // console.log(names)
// // console.log(names.splice(2,4))
// // console.log(names)
// // console.log(names.splice(1,2))
// // console.log(names)

// // let num  = [20,50,40,60,90,75,66]
// // console.log(num.find(checkvalues))
// // function checkvalues(a){
// //     return a >= 90
// // }

// // let num1  = [20,50,40,60,90,75,66]
// // console.log(num.findIndex(checkvalues))
// // function checkvalues(a){
// //     return a >= 90
// // }

// // let num1  = [20,50,40,60,90,75,66]
// // console.log(num1.concat([100,101]))

// // let num2 = [200,2001,3001]
// // console.log(num1.concat(num2))
// // console.log(num1)

// // function s1(){
// //     console.log("shashwat jain")
// //     console.log("my age is 21")
// // }
// // s1()
// // s1()

// // function s2(firstname , lastname){
// //     console.log(firstname + lastname)
// // }
// // s2("shashwat", "jain")
// // s2("ravindra" , "jain")

// // function s3(a , b){
// //     return a + b 
// // }

// // console.log(s3(5,7))

// // function s4(firstname,lastname){
// //     return firstname +" "+ lastname
// // }
// // console.log(s4("shashwat" , "jain"))

// // local variables 
// // function s5(){
// //     a = 20
// //     b = 30
// //     console.log(a , b)
// // }
// // s5()

// // global variables
// // a = 100
// // b = 50
// // function s6(){
// //     console.log(a , b)
// // }

// // console.log(a , b)
// // s6()
// // console.log(a,b)

// // default value 
// // function f2(a = 50 , b = 30 ){
// //     console.log(a, b)
// // }
// // f2()
// // f2(45)
// // f2(65,54)

// // function f3(a , b ){
// //     console.log(a, b)
// // }
// // f3(a = 45 , b  = 54)

// // function calling 

// function s1(){
//     console.log("function 1")
//     s2()
// }

// function s2(){
//     console.log("function 2")
// }

// s1()

// let s = function s3 (){
//     return ("function 3")
// }

// s()
// console.log(s())
// console.log(s)

// // arbitary arguments

// function sj(){
//     console.log(arguments)
// }

// sj(10,50)
// sj(65,45,78,21,20,30,50)

// pure function 
// function s1(n){
//     square = n*n
//     return square
// }
// console.log(s1(5))

// function s2(user , password){
//     if(user == "shashwat" && password == "jain"){
//         console.log("login sucess")
//     }else{
//         console.log("login failed")
//     }
// }
// s2("shashwat" , "jain")
// s2("rj" , "jain")

// normal function
// function s1(name){
//     console.log(name)
// }
// s1("shashwat")

// let s = function(surname){
//     console.log(surname)
// }
// s("jain")

// // arrow function 
// let s2 = (address) =>{console.log(address)}
// s2("vijay nagar")

// rest operator

// function j1(...args){
//     console.log(...args)
// }
// j1(10,20,30,40)
// j1(60,70,80,90)

// rest oprerator
// function s2(a,b,c , ...args){
//     return a+b+c +" ," + args
// }
// console.log(s2(10,20,30,80))

// spread operator
// let a  = ["apple" , "ball", "cat" , "dog"]
// function animals(s1 , s2 ,s3 ,s4){
//     console.log(s1 +" " + s2+" " + s3+ " " + s4)
// }
// animals(...a)