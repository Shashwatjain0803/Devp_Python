// objects class
class parent extends Object{

    a = 10
    b = 20

    constructor(){
        super()
        console.log(this.a)
        console.log(this.b)
    }
}
new parent()