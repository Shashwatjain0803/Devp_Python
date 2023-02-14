class profile{
    constructor(){
        let firstname
        let lastname
    }    

    getuserdetails(){
        console.log(this.firstname , this.lastname)
    }
}

let p = new profile()
p.firstname = "shashwat"
p.lastname = "jain"
p.getuserdetails()