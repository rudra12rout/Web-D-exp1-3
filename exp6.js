let i = 0;
let s1 = 0;
let s2 = 0;
let num1;
let num2;
while (i < 5) {
    num1 = paseInt(prompt("Enter an integer number"));
    s1 += num1;
    i++;
}
document.body.innerHTML = `The sum of five integers (while loop) is ${s1}<br>`;
for (let j = 0; j < 5; j++) {
    num2 = parseInt(prompt("Enter an integer number"));
    s2 += num2;
}
document.body.innerHTML += `The sum of five integers (for loop) is ${s2}`;