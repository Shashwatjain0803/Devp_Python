// polymorphism : having manyforms
class parent{

    constructor(firstname,lastname){
        this.fname = firstname
        this.lname = lastname
    }

    getdetails(){
        console.log("parent:" + this.fname , this.lname)
    }
}
class child extends parent{

    // method overriding
    getdetails(){
        super.getdetails()
        console.log("child:" + this.fname,this.lname)
    }
}
new child("shashwat" , "jain").getdetails()