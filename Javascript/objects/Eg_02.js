
// this

let l = {
    firstname : "shashwat",
    lastname : "jain",
    company : function(){
        console.log(this)
        console.log(this.firstname)
        console.log(this.lastname)
        console.log("wipro")
    }
}

l.company()

console.log(this)
this.a = 10
this.b = 20
console.log(this)