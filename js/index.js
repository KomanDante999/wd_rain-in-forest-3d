let indexRotate = .01
let freeRotate = false

document.addEventListener('mousemove', ev => {
	Object.assign(document.documentElement, {
		style: `
			--moveX: ${(ev.clientX - window.innerWidth / 2) * (indexRotate * -.5)}deg;
			--moveY: ${(ev.clientY - window.innerHeight / 2) * (indexRotate * -1)}deg;
		`
	})
})

document.getElementById('background').addEventListener('mousedown', event => {
	if (!event._clickOnButton) {
		indexRotate = .01;
		freeRotate = false;
	}
})

document.getElementById('button-start').addEventListener('mousedown', event => {
	console.log('button-start');
	event._clickOnButton = true
	if (!freeRotate) {
		freeRotate = true;
		indexRotate = .5;
	}
})


