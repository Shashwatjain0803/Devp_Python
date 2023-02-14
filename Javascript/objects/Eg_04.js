// accessing properties from an object
let l  = {
    firstname : "shashwat",
    lastname : "jain",
    email : "shashwatjain0803@gamil.com",
    company : function(){console.log}("wipro")

}

console.log(l.firstname)
console.log(l["lastname"])

l.contact = 987456123
console.log(l["contact"])

l["address"] = "hyd"
console.log[l.address]

console.log(l)