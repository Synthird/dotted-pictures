const controls = document.querySelector(".control-panel");

export function drawOnEventTrigger(drawFunc) {
	controls.addEventListener("click", event => {
		switch (event.target.getAttribute("id")) {
			case "draw":
				drawFunc();
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

document.getElementById("print").addEventListener("click", () => {
	window.print();
});
