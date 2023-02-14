 // call apply bind
//  call 
 
  let l = {
    firstname  : " hira",
    lastname : " jain",
    display : function(age , contact ){
        console.log(this)
        console.log(this.firstname + " " + this.lastname) 
        console.log(age,contact)
    }
  }
  l.display()
  l.display.call(l,25 , 6544547444)

//  apply 
  l.display.apply(l, [25 , 6544547444])

// bind 
  let l3 = l.display.bind(l, 30 , 6544547444)
  l3()
