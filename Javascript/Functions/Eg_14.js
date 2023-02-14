// spread operator and rest operator
// normal function
function s1 (s,j,k){
    return s+j+k
}

console.log(s1(10,20,30))

// rest operator
function s2(s,j,k,...args){
    return s+j+k+ "," + args
}
console.log(s2(10,50,60)) //120
console.log(s2(10,50,60,46,80)) //120,46,80

// spread operator

let a = ["nameone", "nametwo","namethree","namefour"]
function getnames(n1,n2,n3,n4){
    console.log(n1 + " "+ n2+ " "+ n3 +"" + n4)
}
getnames(a[0],a[1],a[2],a[3])
getnames(...a)