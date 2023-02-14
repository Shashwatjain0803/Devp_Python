// abstraction
class parent{
    firstname
    lastname

    constructor(firstname , lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    getdetails(){
        console.log("parent class :" + this.firstname , this.lastname)
    }
}
class child extends parent{

    constructor(firstname , lastname){
        super(firstname , lastname)
    }
    getdetails(){
        console.log("child class :" + this.firstname , this.lastname)
    }    

}
// let p = new parent("rj" , "radio")
// console.log(p)
// p.getdetails()

let c = new child("dj" ,"chetas")
console.log(c)
c.getdetails()   