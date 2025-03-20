const createSkyscraper = document.getElementById("create-skyscraper");

const floorsBox = document.getElementById("floors-box");
const rodsBox = document.getElementById("rods-box");

const skyscraper = document.getElementById("skyscraper");

const rodTemplate = ".\n";
const floorTemplate = ".......\n";

function addToSkyscraper(template) {
	skyscraper.textContent = `${skyscraper.textContent}${template}`;
}

function drawSkyscraper() {
	skyscraper.textContent = "";

	for (let i = 0; i < rodsBox.value; i++) {
		addToSkyscraper(rodTemplate);
	}

	for (let i = 0; i < floorsBox.value; i++) {
		addToSkyscraper(floorTemplate);
	}
}

function drawOnEnterPressed(event) {
	switch (event.key) {
		case "Enter":
			drawSkyscraper();
			break;
	}
}

createSkyscraper.addEventListener("click", drawSkyscraper);
floorsBox.addEventListener("keyup", drawOnEnterPressed);
rodsBox.addEventListener("keyup", drawOnEnterPressed);