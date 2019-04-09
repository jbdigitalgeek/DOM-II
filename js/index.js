// Your code goes here
// Nav changes
const navEffect = document.querySelector('.nav');
const anchorTag = document.querySelectorAll('.nav-link');

navEffect.addEventListener('mouseover', event => {
	event.target.style.color = 'green';
	event.target.style.fontSize = 'large';
});
navEffect.addEventListener('mouseout', event => {
	event.target.style.color = '#212529';
	event.target.style.fontSize = 'medium';
});
navEffect.addEventListener('click', event => {
	event.preventDefault();
});
// logo heading changes
const logoEffect = document.querySelector('h1');
logoEffect.addEventListener('dblclick', event => {
	event.target.style.color = 'pink';
});
logoEffect.addEventListener('click', event => {
	event.target.style.color = '';
});
logoEffect.addEventListener('wheel', event => {
	event.target.style.fontSize = '500%';
});
logoEffect.addEventListener('mouseout', event => {
	event.target.style.fontSize = '4rem';
	event.target.style.color = '#212529';
});

// button changes
const buttonEffect = document.querySelectorAll('.btn');

buttonEffect.forEach(function(buttonFunction) {
	buttonFunction.addEventListener('mouseover', event => {
		event.target.style.backgroundColor = 'pink';
		buttonFunction.addEventListener('mousedown', event => {
			event.target.style.fontSize = 'x-large';
			buttonFunction.addEventListener('mouseup', event => {
				event.target.style.fontSize = '125%';
			});
		});
	});
});

//draggable picture
// let dragged;
// const dragImg = document.querySelector('img');

// dragImg.addEventListener('drag', (event) => {

// }, false);
// dragImg.addEventListener('dragstart', (event) => {
//     dragged = event.target;
//     event.target.style.opacity = '.5';
// }, false);

// dragImg.addEventListener('dragend', (event) => {
//     event.target.style.opacity = '';
// }, false);

// dragImg.addEventListener('dragover', (event) => {
//     event.preventDefault();
// }, false);

// dragImg.addEventListener('dragenter', (event) => {
//     if (event.target.className === "content-section") {
//         event.target.background = "grey";
//     }
// }, false);

// dragImg.addEventListener('dragleave', (event) => {
//     if (event.target.className === "content-section") {
//         event.target.background = "";
//     }
// }, false);

// dragImg.addEventListener('drop', (event) => {
//     event.preventDefault();
//     if (event.target.className === "content-section") {
//         event.target.background = "";
//         dragged.parentNode.removeChild(dragged);
//         event.target.appendChild(dragged);
//     }
// }, false);
