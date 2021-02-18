const numbers = [1, 2, 3, 4, 5];
//for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//for in
for (const value in numbers) {
    console.log(numbers[value]);
}
//for of
for (const result of numbers) {
    console.log(result);
}
//forEach
numbers.forEach(element => console.log(element));
//while
let index = 0;
while (index != numbers.length) {
    console.log(numbers[index]);
    index++;
}
//do while
index = 0;
do {
    console.log(numbers[index]);
    index++;
} while (index != numbers.length);
//map
let value;
const mapresult = numbers.map(value => console.log(value));