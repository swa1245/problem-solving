// loop
// sum
// n = 5;
// let sum = 0;
// if (n >= 0) {
//   for (var i = 0; i <= n; i++) {
//     sum += i;
//   }
// }
// console.log(sum);

// fact 
// n =5
// let fact =1
// for(var i=1;i<=n;i++){
//     fact = fact *i
// }
// console.log(fact);

// prime number

n = 16
var prime = true
for(var i=2;i<=Math.floor(n/2);i++){
    if(n%i==0){
        prime = false
        break
    }
}
console.log(prime); 
