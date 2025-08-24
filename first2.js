let l = parseInt(prompt("Enter the array length = "),10);
let arr = new Array(l);
for (let i = 0; i < l; i++) {
    arr[i] = parseInt(prompt(`Enter a number for index ${i}: `),10);
}
let sum = 0;
let avg = 0;
for(let j of arr ){
    console.log(j);
    sum += j;
}
console.log("sum = ", sum);
console.log("average = ", sum/arr.length);
