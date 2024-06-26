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

const bmrcalc = document.querySelector(".bmr-calculator");

featured = document.querySelector(".img-center");

close = document.querySelector(".close");

//BMR = 10*Weight + 6.25*height -5*age +5 (male)

//BMR = 10*Weight + 6.25*height -5*age -161 (female)

// const calculateBMR = (weight, height, age, gender) => {
//   if (gender == "male") {
//     return 10 * weight + 6.25 * height - 5 * age + 5;
//   }
//   return 10 * weight + 6.25 * height - 5 * age - 161;
// };

bodyFatBtn.addEventListener("click", () => {
  featured.style.display = "grid";
  bmrcalc.style.display = "none";
});

close.addEventListener("click", () => {
  featured.style.display = "none";
  bmrcalc.style.display = "grid";
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

const reviews = [
  {
    id: 1,
    name: "john",
    job: "butcher",
    img: "https://img.freepik.com/free-photo/abstract-eye-portrait-young-women-elegance-generated-by-ai_188544-9712.jpg",
  },

  {
    id: 2,
    name: "navan",
    job: "bike",
    img: "./images/MC-min.webp",
  },

  {
    id: 3,
    name: "peter",
    job: "tractor",
    img: "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg",
  },

  {
    id: 4,
    name: "jim",
    job: "scooter",
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
  },
];

//select items

const img = document.getElementById("#person-img");
const author = document.getElementById("#author");
const job = document.getElementById("#job");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//set current item

let currentItem = 1;

//load initial item

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
});
