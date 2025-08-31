import { drawOnEventTrigger } from "./all-pages.js";

const skyscraper = document.querySelector("code"),
	floorsBox = document.getElementById("floors-box"),
	rodsBox = document.getElementById("rods-box"),

	rodTemplate = ".",
	floorTemplate = ".......";

function addToSkyscraper(template) {
	skyscraper.textContent = `${skyscraper.textContent}${template}\n`;
}

drawOnEventTrigger(() => {
	skyscraper.textContent = "";

	for (let i = 0; i < rodsBox.value; i++) {
		addToSkyscraper(rodTemplate);
	}

	for (let i = 0; i < floorsBox.value; i++) {
		addToSkyscraper(floorTemplate);
	}
});
