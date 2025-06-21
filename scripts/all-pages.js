const controls = document.querySelector(".control-panel");

export function drawOnEventTrigger(drawFunc) {
	controls.addEventListener("keyup", event => {
		switch (event.key) {
			case "Enter":
				drawFunc();
				break;
		}
	});

	controls.addEventListener("click", event => {
		switch (event.target.getAttribute("id")) {
			case "draw":
				drawFunc();
				break;
		}
	});
}

document.getElementById("print-button").addEventListener("click", () => {
	window.print();
});
