 /****navbar scroll */

let nav = document.querySelector(".navbar");
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
 if(document.documentElement.scrollTop > 20) {
     nav.classList.add('scroll-on');
     mybutton.style.display = "block";
 }else{
  nav.classList.remove('scroll-on');
  mybutton.style.display = "none";

 }

 /****navbar hide */

 let navBar = document.querySelectorAll(".nav-link");
 let Navcollapse = document.querySelector(".navbar-collapse.collapse");

 navBar.forEach(function(a) {
a.addEventListener("click", function() {
    Navcollapse.classList.remove("show");
})
 });

}
 

// loader
 let preloader = document.querySelector(".preloader");
 window.addEventListener("load",function(){
        preloader.style.display = 'none';
 });
 
 
 
 
 
 
 
 /*****counter */

 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById (id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /range)),
        timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if(current == end) {
            clearInterval(timer);
        }
  
},step);


    }
    counter("count-1", 0, 1287, 3000);
    counter("count-2", 100, 5000, 2500);
    counter("count-3", 0, 1440, 3000);
    counter("count-4", 0, 7110, 3000);

});