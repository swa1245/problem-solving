// let age = Number(prompt("enter age"));

// if (isNaN(age)) {
//   console.log("invalid input");
// } else {
//   if (age >= 18) {
//     console.log("valid voter");
//   } else {
//     console.log("invalid voter");
//   }
// }

// unit mesuremnt
// let unit = Number(prompt("enter electricty unit"))
// let amount = 0
// if(unit>400){
//   amount = (unit - 400) * 13
//   unit = 400
// }
// if(unit>200 && unit <=400){
//   amount += (unit - 200) * 8
//   unit = 400
// }
// if(unit>100 && unit <=200){
//   amount += (unit - 100) * 6
//   unit = 100
// }
// amount +=unit*4
// console.log(amount);

// inr domiation
let amount = 4823;
if (amount >= 1000) {
  console.log("1000 notes : ", Math.floor(amount / 1000));
  amount = amount % 1000;
}
console.log(amount);
