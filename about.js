console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submission submitted successfully!");
}

function catComp(evt) {
	alert("You are so good looking.")
}

let form = document.querySelector('#contact');
let cat = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
cat.addEventListener('mouseover', catComp)