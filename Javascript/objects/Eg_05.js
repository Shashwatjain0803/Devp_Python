
// call 

let l = {
    firstname : "raj",
    lastname : "mehra",
    display : function(){
        console.log(this)
        console.log(this.firstname + " " + this.lastname)
        console.log("----------------------------------------------")
    }
}
l.display()

// function borrowing
let l2 = {
    firstname : "raj",
    lastname : "mehta"
}

l.display.call(l2)

let l3 = {
    firstname : "raj",
    lastname : "mohan"
}

l.display.call(l3)