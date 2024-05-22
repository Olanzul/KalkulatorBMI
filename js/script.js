function calculateBMI(){
    const height = document.getElementById('height').value/100;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0){
        const bmi = (weight / (height * height)).toFixed(2);
        let category;
        console.log(bmi);

        if (bmi < 18.5) {
            category = 'Kurus';
        } else if (bmi >= 18.5 && bmi <24.9) {
            category = 'Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Gemuk';
        } else {
            category = 'Obesitas';
        }
        // document.getElementById('category').innerHTML = category;
        document.getElementById('result').innerHTML = 'Your BMI is : ' + bmi + category; 
    } else {
        document.getElementById('result').innerHTML = 'Input required.';
    }
}

function resetForm() {
    document.getElementById('form').reset();
    document.getElementById('result').innerHTML = '';
}