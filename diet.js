const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");

const btns= document.querySelectorAll(".question-btn");
const close = document.querySelectorAll(".close");

close.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains("close")){
      sidebar.classList.toggle("show-sidebar");
    }
  })
})

btns.forEach (function(btn){
  btn.addEventListener("click", function(e){
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle("show-text");
  })
})





closeBtn.addEventListener("click", function(){
sidebar.classList.toggle("show-sidebar");
});

navBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 80) {
          navbar.classList.add("navbar-fixed");
        } else {
          navbar.classList.remove("navbar-fixed");
        }
      });


      import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['images/*.{jpg,png}'], {
	destination: 'build/images',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.6, 0.8]
		})
	]
});

console.log(files);