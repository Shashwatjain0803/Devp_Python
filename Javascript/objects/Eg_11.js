// iterables

let user = {
    firstname : "sai",
    lastname : "kiran"
    
}
console.log("firstname" in user)
console.log("lastname" in user)

// iterables
for (i in user){
    console.log(i,user[i])
}