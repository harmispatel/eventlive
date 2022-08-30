const li=document.querySelectorAll(".nav-link");
const sec=document.querySelectorAll("section");

function activeMenu(){
	let len=sec.lenth;
	while(--len && window.scrollY + 97 < sec[len].offsetTop){}
	li.forEach(ltx => ltx.classList.remove("active"));
	li[len].classList.add(active);
}
activeMenu();ltx
window.addEventListener("scroll", activeMenu);