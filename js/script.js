const wordUser = prompt('inserire una parola')
let message;
if(palindrome(wordUser) === true){
    message ='La parola inserita è palindroma'
}else{
    message ='La parola inserita NON è palindroma'
}




function palindrome(word){
    const wordReverse = word.split('').reverse().join('');
    return word === wordReverse
}
