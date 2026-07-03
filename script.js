console.log("OnGround India Loaded Successfully.");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});