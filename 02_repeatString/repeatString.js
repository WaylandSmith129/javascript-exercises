const repeatString = function(word, num) {
    let combine = '';
    if(num > -1){
        for(i = 0; i < num; i++){
            combine += word;
        }
    }else{
        combine = 'ERROR';
    }
    
    return combine;
};

// Do not edit below this line
module.exports = repeatString;
