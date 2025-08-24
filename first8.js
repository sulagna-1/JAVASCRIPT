let idx = prompt("Enter the size of the array");
let arr = new Array(idx);
for(let i = 0; i<idx; i++){
    arr[i] = parseInt(prompt(`Enter the element at idx ${i} = `),10);
}
arr.forEach((val)=>{
    console.log(val*val);
});