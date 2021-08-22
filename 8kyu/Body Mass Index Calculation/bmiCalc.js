const bmiCalc = (w, h) => {
    let bmi = w / (h * h);
    console.log(bmi);
    if (bmi <= 18.5) {
        return "Underweight";
    }
    if (bmi <= 25) {
        return "Normal";
    }
    if (bmi <= 30) {
        return "Overweight";
    }
    if (bmi > 30) {
        return "Obese";
    }
    else {
        return "something went wrong";
    }
}
console.log(bmiCalc(65, 1.80));