const controls = document.querySelector(".control-panel");

export function drawOnEventTrigger(drawFunc) {
	controls.addEventListener("click", event => {
		switch (event.target.getAttribute("id")) {
			case "draw":
				drawFunc();
				break;
			case "print":
				window.print();
				break;
		}
	});

	controls.addEventListener("keyup", event => {
		switch (event.key) {
			case "Enter":
				drawFunc();
				break;
		}
	});
}
