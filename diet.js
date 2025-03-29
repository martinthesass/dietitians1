// Close modal

const popup = document.querySelector(".modal");

// const close = document.querySelector(".closer");

const xBtn = document.querySelector(".x-btn");

const openModal = document.querySelector(".open-modal");
// const openModals = document.querySelector(".open-modal-1");

xBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// close.addEventListener("click", () => {
//   popup.style.display = "none";
// });

// window.addEventListener("load", function () {
//   setTimeout(function open(event) {
//     document.querySelector(".modal").style.display = "grid";
//   }, 3000);
// });

// * OPEN MODAL */

openModal.addEventListener("click", () => {
  popup.style.display = "grid";
});

// openModals.addEventListener("click", () => {
//   popup.style.display = "grid";
// });

// ********** set date ************
// select span

// const date = (document.getElementById("date").innerHTML =
//   new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

// Question buttons

// const btns = document.querySelectorAll(".question-btn");

const btns = document.querySelectorAll(".question-btn");

const close = document.querySelectorAll(".close");

close.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("close")) {
      sidebar.classList.toggle("show-sidebar");
    }
  });
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
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

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//set current item

let currentItem = 3;

//show pwrson function

function showPerson() {
  const item = reviews[currentItem];

  img.src = item.img;

  author.textContent = item.name;
  job.textContent = item.job;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

//load initial item

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];

  img.src = item.img;

  author.textContent = item.name;
  job.textContent = item.job;
});
