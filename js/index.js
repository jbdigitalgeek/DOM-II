// Your code goes here
// Nav changes
const navEffect = document.querySelector('.nav');


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
        event.stopPropagation();
    });
    
});


//propagation tests
const propTest = document.querySelector('.destination');
propTest.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "blue";
})
const propTest2 = document.querySelector('h4');
propTest2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "red";
    event.stopPropagation();
})


var tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});
tl.staggerTo("h1", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, "0.3", "start")

//animation powered by GSAP JS
//http:www.greensock.com/gsap-js/
  



/*
special thanks to Daniel Riemer who created the text-shadow style and original pen

https://codepen.io/zitrusfrisch

*/