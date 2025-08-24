/* map array method :
creates a new array as result after some operation. 
the value it's callback returns are used to form a new array 
arr.map(callbackFunx(val, idx, arr))
EXAMPLE:
let newArr = arr.map((val)=>{
    return val*2 ;
    });
*/
let idx = prompt("Enter the array index = ");
let arr = new Array(idx);
for (let i = 0; i < idx; i++) {
    arr[i] = parseInt(prompt(`Enter the element at index ${idx} :`),10);
}
 arr.map((val)=>{
    return val*2 ;
 })






