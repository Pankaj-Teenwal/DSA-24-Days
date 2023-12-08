/**
 * 
 * @description To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing.
 * 
 * 
 */

const validatePalindrome = (str)=>{

    for(let i=0, j=str.length-1; i<str.length/2; i++,j--){
        if((str[i]==str[j])){
            continue;
        } 
        else{
            return false;
        }
    }
    return true;

}

console.log(validatePalindrome("madam"));