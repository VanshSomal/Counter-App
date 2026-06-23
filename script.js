let result=0;
function increment(){
    result++;
    document.querySelector('.js-result').innerHTML=result;
}

function decrement(){
    result--;
    document.querySelector('.js-result').innerHTML=result;
}

document.querySelector('.js-result').innerHTML=result;