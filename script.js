const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
	const isOpen = menuButton.getAttribute("aria-expanded") === "true";
	menuButton.setAttribute("aria-expanded", String(!isOpen));
	menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
	navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.setAttribute("aria-label", "Open menu");
		navigation.classList.remove("is-open");
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.setAttribute("aria-label", "Open menu");
		navigation.classList.remove("is-open");
		menuButton.focus();
	}
});

document.querySelector("#year").textContent = new Date().getFullYear();
