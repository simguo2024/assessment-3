let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


let catImg = document.getElementById("cat_image");
catImg.addEventListener("mouseover", function () {
  alert("You looks good today!");
});

function handleSubmit(E) {
	E.preventDefault();
	let name = document.getElementById('name-input').value;
	let message = document.getElementById('message-input').value;
	if(name === '' || message === '') {
		alert("Please fill out the form")
		return;
	}

	let sources = [];
	let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	for (let checkbox of checkboxes) {
		sources.push(checkbox.value);
	}

	alert('Form submitted successfully!\n' +
	'Name: ' + name + '\n' + 'Message: ' + message + '\n' +
	'Heard from: ' + sources.join(', '));
}


