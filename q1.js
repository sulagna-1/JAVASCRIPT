/*
filter method = 
creates anew array of elements that give true for a condition/filter
example all even elements = 
let newArr = arr.filter((val)=>{
    return val % 2 ===0 ;
    })
*/
let idx = prompt("Enter the array length = ");
let arr = new Array (idx);
for (let i = 0; i < idx; i++) {
    arr[i] = parseInt(prompt(`Enter an element for index ${i} = `),10);
}
let evenNum = (val)=>{
    return val % 2 === 0 ;
}
arr.filter(evenNum);







