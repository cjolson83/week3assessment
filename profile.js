function favColor(evt) {
	alert("That's personal!")
}
function favPlace(evt) {
	alert("Are you following me?")
}
function favRitual(evt) {
	alert("I'm not too ritualistic.")
}

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', favColor);
place.addEventListener('click', favPlace);
ritual.addEventListener('click', favRitual);

