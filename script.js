let result=0;
function increment(){
    result++;
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-alert').innerHTML="";
}

function decrement(){
    if(result<=0){
        // alert("cannot decrement further");
        document.querySelector('.js-alert').innerHTML="Counter cannot be -ve"
        return;
    }
        result--;
        document.querySelector('.js-result').innerHTML=result;
}

document.querySelector('.js-result').innerHTML=result;