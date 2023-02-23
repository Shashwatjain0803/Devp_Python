// var var_squ = num=> num*num;
// console.log(var_squ(5));


// var array = [
//     {
//         name: "shashwat",
//         address:"vijaynagar" 
//     },
//     {
//         name: "s",
//         address:"nagar" 
//     },
//     {
//         name: "t",
//         address:"garha" 
//     },
//     {
//         name: "st",
//         address:"vijayst" 
//     }
// ]

// array.forEach(array=> console.log(array.name +"\t"+ array.address));

// function abc(a =  8 , b = 9 , c =10){
//     console.log(a,b,c);
// }
// abc(75,45,65);

// console.log("\t"+"Dear User,");
// console.log("\t"+"\t"+"Your password is expired.Please chick on this link");
// console.log("Thanks");
// console.log("Support Tem");
// var str =`
//                 Dear user,
//                             Your password is expired, Please click here to reset the password
//                 Thanks & Regards,
//                 Support Team`
// console.log(str)
// console.log('shashwat')

var employee = [{
    name: "Kiran",
    Rep_manager: "Rajesh",
    hike: "10%",
    currentCTC: "10LPA",
    revisedCTC: "11LPA",
    role: "Senior Dev"
},
{
    name: "Kiran",
    Rep_manager: "Rajesh",
    hike: "10%",
    currentCTC: "10LPA",
    revisedCTC: "11LPA",
    role: "Senior Dev"
},
{
    name: "Kiran",
    Rep_manager: "Rajesh",
    hike: "10%",
    currentCTC: "10LPA",
    revisedCTC: "11LPA",
    role: "Senior Dev"
},
{
    name: "Kiran",
    Rep_manager: "Rajesh",
    hike: "10%",
    currentCTC: "10LPA",
    revisedCTC: "11LPA",
    role: "Senior Dev"
}
];

var str2 = `
            Dear${employee.name}, 

                           Based on your performance, contribution to the organization. You have got the 
                           highest hikeof ${employee.hike}. Your current ctc is ${employee.currentCTC} is revised to

                           ${employee.revisedCTC}.

                           Your new role is${employee.role}

                  Thanks,
                  ${employee.Rep_manager}`
