document.addEventListener('mousemove', ev => {
	Object.assign(document.documentElement, {
		style: `
			--moveX: ${(ev.clientX - window.innerWidth / 2) * -.005}deg;
			--moveY: ${(ev.clientY - window.innerHeight / 2) * -.01}deg;
		`
	})
})