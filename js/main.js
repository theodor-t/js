document.body.style.backgroundColor = "pink";

//1
const value = +prompt("Introduceti nr", '');
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
}



//3
const username = prompt("Enter username:");
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
}

validationAccount('admin', '123');
//4
const a = prompt('Enter min');
const b = prompt('Enter max');
for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}