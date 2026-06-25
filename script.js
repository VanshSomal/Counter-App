let result=0;
function increment(){
    // grab the input element from the HTML
    const stepInput=document.getElementById('customCounterInput');

    // Get its current value. If it's empty default to 1
    // We use Number() to convert the text value "5" into the actual number 5.
    let stepSize =Number(stepInput.value);
    if(stepSize<=0){
        stepSize=1; //Fallback so the app doesn't break or freeze if empty/0
    }
    // 3. Instead of result++, add the dynamic step size.
    result=result+stepSize;
    document.querySelector('.js-alert').innerHTML = "";
    // updateCounterUI();
    document.querySelector('.js-result').innerHTML=result;

}

function decrement(){
    // grab the input element from the HTML
    const stepInput=document.getElementById('customCounterInput');
    // 2 Get the step size (default to 1 if empty/0)
    let stepSize =Number(stepInput.value);
    if(stepSize<=0){
        stepSize=1;
    }
    // 3.Validation:check if subtraacting thsi step size drops us below 0
    if(result-stepSize<0){
        // alert("cannot decrement further");
        document.querySelector('.js-alert').innerHTML="Counter cannot be -ve"
        return;
    }
        result=result-stepSize;
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

