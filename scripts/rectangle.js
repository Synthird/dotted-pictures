const widthBox = document.getElementById("width-box");
const heightBox = document.getElementById("height-box");

const rectangle = document.querySelector("code");

let width = "";

function drawRectangle() {
	rectangle.textContent = "";

	for (let i = 0; i < widthBox.value; i++) {
		width = `${width}.`;
	}

	for (let i = 0; i < heightBox.value; i++) {
		rectangle.textContent = `${rectangle.textContent}${width}\n`;
	}

	width = "";
}

function drawOnEnterPressed(event) {
	switch (event.key) {
		case "Enter":
			drawRectangle();
			break;
	}
}

document.getElementById("create-rectangle").addEventListener("click", drawRectangle);
widthBox.addEventListener("keyup", drawOnEnterPressed);
heightBox.addEventListener("keyup", drawOnEnterPressed);
