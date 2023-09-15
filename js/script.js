const word = prompt('inserire una parola')
const wordReverse = word.split('').reverse().join('');
let message;
if(word === wordReverse){
    message = 'La parola inserita è palindroma'
}else{
    message ='La parola inserita non è palindroma'
}
console.log(message);