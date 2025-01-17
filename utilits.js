const debounce = (func,time) => {
    let timeoutId;

    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
    
        timeoutId = setTimeout(() =>{
            func.apply(null, args);
        },time);
    };  
};