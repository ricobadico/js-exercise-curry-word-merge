const mergeWordsVarInit = () => { //Creates initial fullString variable, which will end up private in inner function's closure
    
    let fullString = "";

    const mergeWordsInner = (word) => { //main function definition, assigned to mergeWords below

        //This case occurs when invoked without an argument, providing a final return value
        if (word === undefined){ 
            returnString = fullString; //we want to return fullString but also reset it for future function calls
            fullString = "";
            return returnString;
        }

        //This case occurs when invoked with an argument, adding to the functions stored fullString value while returning another call of itself (to allow currying of more arguments)
        else{ 
        fullString === "" ?
            (fullString = word) : 
            (fullString = `${fullString} ${word}`); //concatinates the argument word onto the end of the built up fullString. Ternary operator exists to prevent an initial space before first word.
        return mergeWordsInner;
        }
    }

    //returns main function definition, to be passed on to mergeWords variable (with initialized fullString variable stored in closure)
    return mergeWordsInner; 
}    

const mergeWords = mergeWordsVarInit(); 

console.log("Welcome! Type wordMerge followed by any number of individual string arguments, and finally an empty call. Those individuals strings will be merged into one.")
console.log("So, for example, mergeWords('Hello')('young')('man')(); returns 'Hello young man'")
