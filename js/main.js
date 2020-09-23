let ga1 = document.getElementById('ga1');
let ga2 = document.getElementById('ga2');
let ga3 = document.getElementById('ga3');
let ga4 = document.getElementById('ga4');
let ga5 = document.getElementById('ga5');

let og1 = document.getElementById('og1');
let og2 = document.getElementById('og2');
let og3 = document.getElementById('og3');
let og4 = document.getElementById('og4');
let og5 = document.getElementById('og5');

let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');
let back4 = document.getElementById('back4');
let back5 = document.getElementById('back5');

let projectImg1 = document.getElementById('project-img-1');
let projectImg2 = document.getElementById('project-img-2');
let projectImg3 = document.getElementById('project-img-3');
let projectImg4 = document.getElementById('project-img-4');
let projectImg5 = document.getElementById('project-img-5');



ga1.addEventListener('click', () => {
	og1.style.display = 'grid';
	og1.classList.add('animate-overlay');
	projectImg1.classList.add('animate-image')
})

ga2.addEventListener('click', () => {
	og2.style.display = 'grid';
	og2.classList.add('animate-overlay');
	projectImg2.classList.add('animate-image')
})

ga3.addEventListener('click', () => {
	og3.style.display = 'grid';
	og3.classList.add('animate-overlay');
	projectImg3.classList.add('animate-image')
})

ga4.addEventListener('click', () => {
	og4.style.display = 'grid';
	og4.classList.add('animate-overlay');
	projectImg4.classList.add('animate-image')
})

ga5.addEventListener('click', () => {
	og5.style.display = 'grid';
	og5.classList.add('animate-overlay');
	projectImg5.classList.add('animate-image')
})




back1.addEventListener('click', () => {
	og1.classList.add('animate-overlay-back');
	setTimeout(function(){
		og1.style.display = 'none';
		og1.classList.remove('animate-overlay');
		og1.classList.remove('animate-overlay-back');
		projectImg1.classList.remove('animate-image');
		;},500)
})

back2.addEventListener('click', () => {
	og2.classList.add('animate-overlay-back');
	setTimeout(function(){
		og2.style.display = 'none';
		og2.classList.remove('animate-overlay');
		og2.classList.remove('animate-overlay-back');
		projectImg2.classList.remove('animate-image');
		;},500)
})

back3.addEventListener('click', () => {
	og3.classList.add('animate-overlay-back');
	setTimeout(function(){
		og3.style.display = 'none';
		og3.classList.remove('animate-overlay');
		og3.classList.remove('animate-overlay-back');
		projectImg3.classList.remove('animate-image');
		;},500)
})

back4.addEventListener('click', () => {
	og4.classList.add('animate-overlay-back');
	setTimeout(function(){
		og4.style.display = 'none';
		og4.classList.remove('animate-overlay');
		og4.classList.remove('animate-overlay-back');
		projectImg4.classList.remove('animate-image');
		;},500)
})

back5.addEventListener('click', () => {
	og5.classList.add('animate-overlay-back');
	setTimeout(function(){
		og5.style.display = 'none';
		og5.classList.remove('animate-overlay');
		og5.classList.remove('animate-overlay-back');
		projectImg5.classList.remove('animate-image');
		;},500)
})