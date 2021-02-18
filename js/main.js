document.body.style.backgroundColor = "pink";

//1
/*const value = +prompt("Introduceti nr", '');
if (value > 0) {
    alert("1");
} else if (value < 0) {
    alert("-1");
} else if (value === 0) {
    alert("0");
} else {
    alert("Error");
}
//2
const age = +prompt('Enter your age:');
if (age >= 14 && age <= 90) {
    alert('True');
    else
        alert('False');
}
const age = +prompt('Enter your age:');
if (!(age >= 14 && age <= 90)) {
    alert('False');
    else
        alert('True');
}*/



//3
/*const username = prompt("Enter username:");
const password = prompt("Enter password:");

function validationAccount(name, pass) {
    if ((username === '') && (password === '')) {
        alert("Error validation!");
    } else if (name === username &&
        pass === password) {
        alert("Hello!");
    } else if (!(name === username) && pass === password) {
        alert("Incorrect username!");

    } else if (name === username && !(pass === password)) {
        alert("Incorrect password!");

    } else if (!(name === username) && !(pass === password)) {
        alert("Incorrect username and password!");

    }
}*/

// validationAccount('admin', '123');
//4
/*const a = prompt('Enter min');
const b = prompt('Enter max');
for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}*/
/*const calculate = (x,y) => {
	return 2 * x + y;
}
console.log(calculate(5,3));*/

/*console.log(numbers.reduce((a, b) => a + b));*/
//
const marks = [7, 3, 7, 8, 9, 10];
let sum = 0;
let average = 0;
for (let i = 0; i < marks.length; i++){
	sum += marks[i];
}
console.log('Suma notelor este :' + sum);
average = sum / marks.length;
	console.log('Media este :' + average);
min = Math.min(...marks);
	console.log('Nota minima este : ' + min);
if (min < 5) {
    console.log('Studentul este restantier.');
} 
else console.log('Studentul nu este restantier.');

