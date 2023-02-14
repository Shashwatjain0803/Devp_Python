//  arguments keyword
function s1 (){

    console.log(arguments) 
    // s1 -  { '0': 10 }
    // s2 -  { '0': 10, '1': 20, '2': 30, '3': 40 }
    console.log(arguments.length) // 1 , // 4
    console.log(arguments[0]) // 10  , // 10

}
s1(10) 
s1(10,20,30,40) 