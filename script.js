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

// SETTINGS MODAL LOGIC

const gearBtn=document.getElementById('gearBtn');
const closeModalBtn=document.getElementById('closeModalBtn');
const settingsModal=document.getElementById('settingsModal');
const modalOverlay=document.getElementById('modalOverlay');

function openSettings(){
    settingsModal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
}

function closeSettings(){
    settingsModal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}


// Event Hooks
gearBtn.addEventListener('click',openSettings);
closeModalBtn.addEventListener('click',closeSettings);
modalOverlay.addEventListener('click',closeSettings); //close menu if clicking outside teh box