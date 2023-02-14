// constructor with arguments using this keyword and prototype method
class parent{

    constructor(firstname,lastname){
        this.fname = firstname
        this.lname = lastname
    }
    getdetails(){
        console.log(this.fname,this.lname)
    }
}

let p = new parent("shashwat","jain")
p.getdetails()