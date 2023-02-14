// constructor and prototype and static method

class profile{

    constructor(){
       console.log("default constuctor")
    }

    getuserdetails(){
        console.log("prototype method")
    }

    static getproductdetails(){
        console.log("get product details")
    }
}

new profile().getuserdetails

profile.getproductdetails()