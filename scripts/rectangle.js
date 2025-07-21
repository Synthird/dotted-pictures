import { drawOnEventTrigger } from "./all-pages.js";

const rectangle = document.querySelector("code"),
	widthBox = document.getElementById("width-box"),
	heightBox = document.getElementById("height-box");

let width = "";

drawOnEventTrigger(() => {
	rectangle.textContent = "";

	for (; width.length < widthBox.value;) {
		width = `${width}.`;
	}

	for (let i = 0; i < heightBox.value; i++) {
		rectangle.textContent = `${rectangle.textContent}${width}\n`;
	}

	width = "";
});
