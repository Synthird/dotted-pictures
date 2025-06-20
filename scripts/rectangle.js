const rectangle = document.querySelector("code"),
	widthBox = document.getElementById("width-box"),
	heightBox = document.getElementById("height-box");

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

function drawOnEnterPress(event) {
	switch (event.key) {
		case "Enter":
			drawRectangle();
			break;
	}
}

document.getElementById("create-rectangle").addEventListener("click", drawRectangle);
widthBox.addEventListener("keyup", drawOnEnterPress);
heightBox.addEventListener("keyup", drawOnEnterPress);
