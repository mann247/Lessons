// August 6th
// Anoh & Nia 1:1


/* //palindrome examples
//madam
//noon
//mom 
//dad
//middle letter stays the same. 
string 
// */

//isPalindrome
    //'madam noon' = true
    //needs to use two pointers

    // Create a function called isPalindrome that checks if 
    // a given string is a palindrome (reads the same forwards and backwards, 
    // ignoring spaces and punctuation). How can you implement this function in JavaScript?
        //

function isPalindrome(word){
        let cleanWord = '';
        word = word.toLowerCase();
         //char = ' '; 


        //ignore spaces and punctuation
        for(i=0; i < word.length; i++){
            const char = word[i];
            if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
                cleanWord = cleanWord + char; //cleanWord += char;
            } 
        }//makes sure you only have letters and numbers

            //two indexes to iterate over the word. this is efficient, and fast. this is happening at the same time 
            //instead of one line at a time.
            let left = 0;
            let right = cleanWord.length - 1;

            while(left < right){
                if (cleanWord[left] !== cleanWord[right]){
                    return false;
                }
                //one index forward, one back. When it is equal it will stop.
                left++;
                right--;
            }
        return true;
    }
console.log(isPalindrome("BOOK"));
console.log(isPalindrome("PAP"));
console.log(isPalindrome("444"));
console.log(isPalindrome("DAD"));
console.log(isPalindrome("BO!"));
console.log(isPalindrome("Ma!Dam"));


//isPalindrome