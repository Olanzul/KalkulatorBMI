const container = document.querySelector('.container');
const result = document.querySelector('.result')
const submit = document.querySelector('#submit');
submit.disabled = true;

const form = document.querySelector('#form');

// disabling submit button
form.addEventListener('keyup', function(){
    for (let i = 0; i < form.elements.length; i++){
        if (form.elements[i].value.length !==0) {
            submit.classList.remove('disabled');
            submit.classList.add('disabled');
        } else {
            return false;
        }
    }
    submit.disabled = false;
    submit.classList.remove('disabled');
});

// submit button
function calculateBMI(){
    const height = document.getElementById('height').value/100;
    const weight = document.getElementById('weight').value;
    
    
    if (height > 0 && weight > 0){
        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = 'Thin';
        } else if (bmi >= 18.5 && bmi <24.9) {
            category = 'Ideal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Fat';
        } else {
            category = 'Obesse';
        }
        document.getElementById('result').innerHTML = 'Your BMI is : ' + bmi + ' (' + category + ')'; 
    } else {
        submit.classList.add('disabled');
    }
    result.style.display = 'block';
    result.classList.add('fadeIn');
    container.style.height = '400px';
    return;
}

// reset button
function resetForm() {
    document.getElementById('form').reset();
    document.getElementById('result').innerHTML = '';
    result.disabled = true;
    submit.disabled = true;
    submit.classList.add('disabled');
    container.style.height = '240px';
}