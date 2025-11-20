function textString(chain){
    if(chain.length > 30){
        return chain.slice(0, 30) + "...";
    } else {
         return chain;
    }
}