
const number = Math.floor(Math.random() * 10 + 1);

let userNumber = Number(window.prompt('Digite um numero'));

console.log(userNumber,number);
if(number === userNumber){
    alert('Good Work');
}else{
    alert('Bad Work');
}