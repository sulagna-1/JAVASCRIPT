let marks = [10,20,30,40,50];
let sum = 0;
for(let i of marks){
    sum += i;
}
console.log("sum = ", sum);
console.log("Average = ", (sum/marks.length));
