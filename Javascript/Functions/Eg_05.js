//  passing default values in functions

function s1(a = 10 , b = 20){

console.log(a,b)
}

s1()
s1(100,500)
s1(500)

// passing keys and values in function
function s2(x,y){
    console.log(x,y)
}
s2(10,200)
s2(x = 500 , y = 900)