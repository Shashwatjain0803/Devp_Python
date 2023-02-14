let l1 = [10,20,30,40,50,60]
console.log(l1.find(checkValues))

function checkValues(a){
      return a >= 30
}

// find index
let l2 = [10,20,30,40,50,60]
console.log(l2.findIndex(checkValues))
function checkValues(a){
    return a >= 30
}