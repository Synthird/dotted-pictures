const skyscraper = document.querySelector("code"),
	floorsBox = document.getElementById("floors-box"),
	rodsBox = document.getElementById("rods-box"),
	controls = document.querySelector(".control-panel"),

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

controls.addEventListener("keyup", event => {
	switch (event.key) {
		case "Enter":
			drawSkyscraper();
			break;
	}
});

document.getElementById("create-skyscraper").addEventListener("click", drawSkyscraper);
