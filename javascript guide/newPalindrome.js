//8-14-2025
// isPalindrome Function

//A word that can be reversed.
//Kayak.

//Reverse the string.

//1. Initialize the variable that will hold reversed string
//2. Initialize a clean word. (To ensure there are no special characters and spaces)
//3. Use a loop to ignore special characters and spaces
//4. Use a loop to look at original string from the end of it, and then move to the beginning of the string
//5. If Statement
    // - If the reversed string != the original string >> return false
    // - If the reversed string = the original string >> return true.
//6. Log to see if the function passes.

function isPalindrome(word){
    let revWord = ''; //Blank String
    let cleanWord = '';
    // .toLowercase();

    for(let i =0; i< word.length;i++){
        const char = word[i].toLowerCase(); //looking at specific characters
        if((char >='a' && char<='z')|| (char >='0' && char<='9')){
            cleanWord = cleanWord + char;
        }
    }
    for (let i = cleanWord.length -1; i >=0 ; i--){
        revWord += cleanWord[i]; //str[i] = character
    }
    console.log(revWord);
    console.log(cleanWord);

    if(revWord === cleanWord){
        return true;
    }else {
        return false;
    }
}
console.log(isPalindrome("I love food!"));
