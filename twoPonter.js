function palindrome(inputWord) {
    let i = 0;
    let k = inputWord.length - 1;

    while (i <= k) {
        if (inputWord[i] !== inputWord[k]) {
            return "Not a palindrome";
        }
        i++;
        k--;
    }

    return "Palindrome";
}
console.log(palindrome("madam"));
