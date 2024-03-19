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

const bodyfat = document.querySelector(".bmr-calculator form #bodyfat");

const bodyFatBtn = document.querySelector(".bodyfat-btn");
const bodyFatBtnM = document.querySelector(".bodyfat-btn-1");

const bodyest = document.querySelector(".bodyfat-est");
const bodyest1 = document.querySelector(".bodyfat-est-1");

const bmrcalc = document.querySelector(".bmr-calculator");

xBtn = document.querySelector(".x-btn");

//BMR = 10*Weight + 6.25*height -5*age +5 (male)

//BMR = 10*Weight + 6.25*height -5*age -161 (female)

// const calculateBMR = (weight, height, age, gender) => {
//   if (gender == "male") {
//     return 10 * weight + 6.25 * height - 5 * age + 5;
//   }
//   return 10 * weight + 6.25 * height - 5 * age - 161;
// };

xBtn.addEventListener("click", () => {
  bodyest1.style.display = "none";
});

bodyFatBtn.addEventListener("click", () => {
  bodyest.style.display = "block";
  bmrcalc.style.display = "none";
});

bodyFatBtnM.addEventListener("click", () => {
  bodyest1.style.display = "block";
  bmrcalc.style.display = "none";
});

let lbm = weight - bodyfat;

const calculateBMR = (weight, bodyfat) => {
  let lbm = weight - bodyfat;
  return 21.6 * lbm + 370;
};

calculateBtn.addEventListener("click", () => {
  // let genderValue = document.querySelector(
  //   ".bmr-calculator form input[name='gender']:checked"
  // ).value;

  let BMR = calculateBMR(weight.value, bodyfat.value) * 1.4 - 500;

  let fat = BMR * 0.35;
  let lbm = weight.value - bodyfat.value;
  let protein = lbm * 9.6;
  let carb = BMR - (protein + fat);
  console.log(fat);

  console.log();

  calories.innerHTML = "Your Total Calories are " + Math.round(BMR);
  fats.innerHTML = Math.round(fat / 9) + " grams of fat";
  proteins.innerHTML = Math.round(protein / 4) + " grams of protein ";
  carbs.innerHTML = Math.round(carb / 4) + " grams of carbohydrates";
});
