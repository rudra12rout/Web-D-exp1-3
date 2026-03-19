let num1;
let num2;
num1=prompt("Enter the 1st number");
num2=prompt("Enter the 2nd number");
let resultmessage;
if(num1>num2){
   resultmessage="The 1st number is greater than the 2nd number";
}
else if(num1<num2){
    resultmessage="The 2nd number is greater than the 1st number";
}
else{
    resultmessage="The both numbers are equal";
}

document.body.innerHTML=`<h2>${resultmessage}</h2>`;