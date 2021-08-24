var corona = 
[
 {
   firstName:"shay",
   lastName:"baruch",
   city:"ashdod",
   id:1,
   YearOfBirth:"2005"
 },
 {
    firstName:"kfir",
    lastName:"recfsd",
    city:"yavne",
    id:2,
    YearOfBirth:"2005"
 },
 {
    firstName:"gadi",
    lastName:"brtywx",
    city:"rehovot",
    id:3,
    YearOfBirth:"2005"
   }
]
// console.log(corona);
var input = document.getElementById("input")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")
var input5 = document.getElementById("input5")
var inputCheck = document.getElementById("input6")
var buttonCheck = document.getElementById("btn")
var submit = document.getElementById("submit")
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var div = document.getElementById("div")
var ul = document.getElementById("ul")

////////////////////exe 1///////////////////////
submit.addEventListener("click",function name(params) {
var newObjcet = {
    firstName:input.value.toUpperCase(),
    lastName:input2.value.toUpperCase(),
    city:input3.value.toUpperCase(),
    id:input4.value.toUpperCase(),
    YearOfBirth:input5.value.toUpperCase(),
    date : { d:new Date().getMonth(),
             h:new Date().getHours(),
           }  
}
console.log(newObjcet);
console.log(corona);
/////////////////////// exe 3 

corona.push(newObjcet);

for (let i = 0; i < corona.length; i++) {
    if (corona[i].id == newObjcet.id) {
     console.log("existing ID card");
    }}
// p1.innerHTML = `<p>first name:${input.value},last name:${input2.value},city:${input3.value},id:${input4.value},year of birth:${input5.value}</P>`
})

/////////////////////////// exe 4
// for (let i = 0; i <corona.length; i++) {
//     div.innerHTML +=`first name:${corona[i].firstName},last name:${corona[i].lastName},city:${corona[i].city},id:${corona[i].id},year of birth:${corona[i].YearOfBirth}`
    
// }
/////////////////////////// exe 5
// for (let i = 0; i <corona.length; i++) {
//     ul.innerHTML +=`first name:${corona[i].firstName},last name:${corona[i].lastName},city:${corona[i].city},id:${corona[i].id},year of birth:${corona[i].YearOfBirth}<br>`
    
// }

///////////////////////////exe 6
// (i did it in the function) 

/////////////////////////// exe 7
// buttonCheck.addEventListener("click",function () {
//     for (let i = 0; i < corona.length; i++) {
//         if (corona[i].firstName == inputCheck.value) {
//           p2.innerText += `name:${corona[i].firstName} last name:${corona[i].lastName} city:${corona[i].city} id:${corona[i].id} year of birth:${corona[i].YearOfBirth}`
//          }else {
//             p2.innerHTML = `<p style = "color:red">Fill out the form again</p>`
//          }
//     }
// })









































































































































































































