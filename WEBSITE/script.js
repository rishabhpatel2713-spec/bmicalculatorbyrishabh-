function calculateBMI() {

    // Get input values
    let weight = Number(
        document.getElementById("weight").value
    );

    let height = Number(
        document.getElementById("height").value
    );


    // Check input
    if (weight <= 0 || height <= 0) {

        alert("Please enter a valid weight and height.");

        return;
    }


    // Convert cm to meters
    height = height / 100;


    // BMI formula
    let bmi = weight / (height * height);


    // Round BMI
    bmi = bmi.toFixed(1);


    let category = "";
    let categoryColor = "";


    // Determine category
    if (bmi < 18.5) {

        category = "Underweight";
        categoryColor = "#3498db";

    }

    else if (bmi < 25) {

        category = "Normal Weight";
        categoryColor = "#2ecc71";

    }

    else if (bmi < 30) {

        category = "Overweight";
        categoryColor = "#f1a900";

    }

    else {

        category = "Obesity";
        categoryColor = "#e74c3c";

    }


    // Display BMI
    document.getElementById("bmi-value").innerText = bmi;


    // Display category
    let categoryElement =
        document.getElementById("category");

    categoryElement.innerText = category;

    categoryElement.style.color = categoryColor;
}


function resetCalculator() {

    // Clear inputs
    document.getElementById("weight").value = "";

    document.getElementById("height").value = "";


    // Reset result
    document.getElementById("bmi-value").innerText = "--";

    document.getElementById("category").innerText =
        "Enter your details above";

    document.getElementById("category").style.color =
        "#555";
}