const removeExclamationMarks = (str) => {
    let strSplit = str.split("");
    let strNoExc = [];
    for(i = 0; i < strSplit.length; i++){
        if(strSplit[i] != "!"){
            strNoExc[i] = strSplit[i];
        }
    }
    return(strNoExc).join("");
}

console.log(removeExclamationMarks(""));