let num = prompt("Enter the array length = ");
let arr = new Array(num);
for (let i = 0; i < num; i++) {
    arr[i] = prompt(`Enter the element ${i + 1} = `);
}
let calcSquare = (ar) =>{
    console.log(ar*ar);
};
arr.forEach(calcSquare);
