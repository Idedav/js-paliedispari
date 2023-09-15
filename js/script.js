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



// FUNCTION PALINDROME
function palindrome(word){
    const wordReverse = word.split('').reverse().join('');
    return word === wordReverse
}
