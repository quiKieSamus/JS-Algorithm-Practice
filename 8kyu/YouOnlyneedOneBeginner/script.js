const check = (a, x) => {
    for(i = 0; i < a.length; i++){
        if(a[i] === x){
            return true
        }
    }
    return false;
}

console.log(check([1, "a", 22], 22));