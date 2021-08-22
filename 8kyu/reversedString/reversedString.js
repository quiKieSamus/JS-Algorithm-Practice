const reverseString = (str = "") => {
    let splitStr = str.split("");
    let reversedString = [];
    console.log(splitStr);
    console.log(reversedString)
    for(i = splitStr.length -1; i >= 0; i--){
        reversedString.push(splitStr[i]);
        console.log(reversedString);
    }

    return reversedString.join("");
}

console.log(reverseString("Hola"));