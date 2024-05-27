const container = document.querySelector('.container');
const result = document.querySelector('.result')
result.style.display = 'none';

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
        document.getElementById('result').innerHTML = 'Input required.';
    }
    result.style.display = '';
    container.style.height = '395px';
    return;
}

function resetForm() {
    document.getElementById('form').reset();
    document.getElementById('result').innerHTML = '';
    container.style.height = '240' ;
    return;
}