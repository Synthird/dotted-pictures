const skyscraper = document.querySelector("code"),
	floorsBox = document.getElementById("floors-box"),
	rodsBox = document.getElementById("rods-box"),

	rodTemplate = ".\n",
	floorTemplate = ".......\n";

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

document.getElementById("create-skyscraper").addEventListener("click", drawSkyscraper);
floorsBox.addEventListener("keyup", drawOnEnterPressed);
rodsBox.addEventListener("keyup", drawOnEnterPressed);
