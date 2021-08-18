const boolToString = bool => {
    if(bool === true){
        return("true");
    }

    else if(bool === false){
        return("false");
    }

    else {
        return("something went wrong");
    }
}