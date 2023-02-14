// closers 
function s1(){
    j = 10
    console.log(j)
    function s2(){
        y = 20
        console.log(y)
    }
    return s2
}

f = s1()
console.log(typeof(f))
f()
