/* let price = [250,645,300,900,50];
let i = 0;
for (let val of price){
    let offer  = val/10;
    price[i] = price[i]-offer;
    console.log(`value after offer = ${price[i]}`);
    i++; 
}
ARRAY METHODS :-
  => some methods change the array 
  => some methods return a new changed array 
PUSH METHOD :-
ADD TO END 

POP METHOD :- 
DELETES AND RETURNS THE ARRAY 
*/ 
let veggies = ["potato", "tomato", "cabbage", "beans"];
let veggies2 = veggies.pop();
console.log(veggies2); // Output: "beans"
console.log(veggies); // Output: ["potato", "tomato", "c