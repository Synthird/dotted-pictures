const controls = document.querySelector(".control-panel");

export function drawOnEventTrigger(draw) {
	controls.addEventListener("click", event => {
		switch (event.target.getAttribute("id")) {
			case "draw":
				draw();
				break;
			case "print":
				window.print();
				break;
		}
	});

	controls.addEventListener("keyup", event => {
		switch (event.key) {
			case "Enter":
				draw();
				break;
		}
	});
}
