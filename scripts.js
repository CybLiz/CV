const bascule = document.getElementById('bascule');
const verticalLine2 =document.querySelector('verticalLine2')


bascule.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

verticalLine2.addEventListener('click', () => {
	document.body.style.color ('#27374D');
});
