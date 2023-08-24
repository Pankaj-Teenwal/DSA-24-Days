/**
 * @description Q. To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method.
 * 
 * algo: we simply reverse the string using built-in tools and then we simply check that the string is equal to input sting if yes then we simply return the true if not then we return false.
 */

const palindrome = (str)=>{
    let reverseStr = str.split("").reverse().join(""); 
    if(str === reverseStr){
        return true;
    }
    else{
        return false;
    }

    
}

console.log(palindrome('madam'));