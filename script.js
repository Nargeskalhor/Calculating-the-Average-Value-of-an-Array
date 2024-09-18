"use strict";
const numbers = [5, 7, 3, 9, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
const average = sum / numbers.length;
console.log(average);
