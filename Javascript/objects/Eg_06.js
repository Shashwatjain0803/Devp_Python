let l1 = {
    firstname : " raj" , 
    lastname :  "lodhi"
}

// writing the function outside

let s = function(){
    console.log(this.firstname + " " + this.lastname)
}

s.call(l1)

let l2 = {
    firstname : " raja" , 
    lastname :  "rani"
}    
s.call(l2)