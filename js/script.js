// WORD PALINDROME
const wordUserInput = document.getElementById('word-user')
const btnCheck = document.getElementById('btn-check')
let message;
btnCheck.addEventListener('click', function(){
    const wordUser = wordUserInput.value;
    wordUserInput.value= ''
    if(palindrome(wordUser) === true){
        message ='La parola inserita è palindroma'
    }else{
        message ='La parola inserita NON è palindroma'
    }
    document.getElementById('palindrome-output').innerHTML= message
})
// ODD OR EVEN
const numberUserInput = document.getElementById('number-input');
const oddEvenUserInput = document.getElementById('odd-even-input');
const btnCalc = document.getElementById('btn-calc');

btnCalc.addEventListener('click', function(){
    const numberUser = parseInt(numberUserInput.value);
    const oddEvenUser = oddEvenUserInput.value;
    numberUserInput.value= '';
    let numberOk = true
    const numberPc = randomizer(1,5)
    document.getElementById('output-odd-even').innerHTML= message
    if(oddEven(summ(numberUser,numberPc)) && oddEvenUser === 'pari'){
        message = 'Hai scelto ' + numberUser + ' e hai scelto ' + oddEvenUser + ' al pc è uscito ' + numberPc + '. La somma dei numeri è ' + summ(numberUser,numberPc) + ' quindi hai vinto!'
    }else{
        message = 'Hai scelto ' + numberUser + ' e hai scelto ' + oddEvenUser + ' al pc è uscito ' + numberPc + '. La somma dei numeri è ' + summ(numberUser,numberPc) + ' quindi hai perso...'
    }
// CHECK NUMBER RIGHT
    if(isNaN(numberUser) || numberUser < 1 || numberUser > 5){
        numberOk = false
        message = 'Errore, numero non valido.'
    }

    document.getElementById('output-odd-even').innerHTML= message
})

// FUNCTION PALINDROME
function palindrome(word){
    const wordReverse = word.split('').reverse().join('');
    return word === wordReverse
}
// FUNCION RANDOMIZER
function randomizer(min, max){
    return Math.floor(Math.random() * max) + min;
}
// FUNCTION SUMM
function summ(numA, numB){
    tot = numA + numB;
    return tot;
}
// FUNCTION ODD EVEN
function oddEven(num){
    let odd = false;
    if(num % 2 === 0){
        odd = true;
    }
    return odd;
}
