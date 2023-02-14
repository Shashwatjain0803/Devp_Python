// single level inheritance using parameter constructor
class parent{
    constructor(firstname, lastname){
        console.log(firstname)
        console.log(lastname)
    }
}

class child extends parent{

    constructor(email,address){
        super("shashwat","jain")
        console.log(email)
        console.log(address)

    }
}
new child("shashwatjain0803@gmail.com", "jbp")