const changeStr = (str = "") => {
    let strSplit = str.split(""); //disecting the variable for more specific examination

    for(i = 0; i < str.length; i++){ 
        console.log("1er for");
        for(j = 0; j < str.length; j++){
            if(strSplit[i] === strSplit[j]){
                strSplit[i] = strSplit[i].replace(str.charAt(j), "(");
            }
            console.log("2do for");
            
        }
    }
    return strSplit.join("");
}
console.log(changeStr("a"));


