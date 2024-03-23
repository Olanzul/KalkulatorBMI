function calculateBMI(){
    try {
        var weight = parseFloat(document.getElementById('weight').value);
        var height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
       
        if (isNaN(weight) || weight <= 0 || weight > 500) {
            alert("Please enter a valid weight.");
            return;
        }

        // Check if height is a valid number and within a reasonable range
        if (isNaN(height) || height <= 0 || height > 3) {
            alert("Please enter a valid height.");
            return;
        }
        

        var bmi = weight / (height * height);
        var category;

    if  (bmi<18.5) {
        category="Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    document.getElementById('additionalMessage').style.display = category ? "block" : "none";
    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
    document.getElementById("category").innerText =  category
    } catch (error) {
        console.log(error);
    }   
}

function resetForm(){
    document.getElementById('sex-man').checked = false;
    document.getElementById('sex-woman').checked = false;
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
}