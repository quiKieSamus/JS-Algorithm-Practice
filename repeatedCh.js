const changeStr = (str = "") => {
    let strSplit = str.toLowerCase().split(""); //disecting the variable for more specific examination
    console.log(strSplit);

    for(i = 0; i < str.length; i++){ 
        for(j = 0; j < str.length; j++){
            if(str.charAt(j) === strSplit[i]){
                strSplit[i] = strSplit[i].replace(str.charAt(i), "(");
            }
        }
    }
    return strSplit.join("");
}
console.log(changeStr("caro"));


