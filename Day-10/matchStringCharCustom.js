const isCharacterMatches =(str, char)=>{
    return str[str.length-1] == char ? true : false
}
let string = "Hello";

console.log(isCharacterMatches(string, "q"))
