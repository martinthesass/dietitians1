const calories = document.querySelector(".bmr-calculator .result .calories");

const calculateBtn = document.querySelector(
  ".bmr-calculator .result .calculate-btn"
);

const age = document.querySelector(".bmr-calculator form #age");

const height = document.querySelector(".bmr-calculator form #height");

const weight = document.querySelector(".bmr-calculator form #weight");

const fats = document.querySelector(".fats");
const proteins = document.querySelector(".proteins");
const carbs = document.querySelector(".carbs");

//BMR = 10*Weight + 6.25*height -5*age +5 (male)

//BMR = 10*Weight + 6.25*height -5*age -161 (female)

const calculateBMR = (weight, height, age, gender) => {
  if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
};

calculateBtn.addEventListener("click", () => {
  let genderValue = document.querySelector(
    ".bmr-calculator form input[name='gender']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

  let fat = BMR * 0.25;
  let protein = BMR * 0.5;
  let carb = BMR * 0.5;

  calories.innerHTML = "Your Total Calories are " + Math.round(BMR);
  fats.innerHTML = Math.round(fat) + " calories from Fat";
  proteins.innerHTML = Math.round(protein) + " calories from protein ";
  carbs.innerHTML = Math.round(carb) + " calories from carbohydrates";
});
