const content = [
	[
		"React is extremely popular",
		"It makes building complex, interactive UIs a breeze",
		"It's powerful & flexible",
		"It has a very active and versatile ecosystem",
	],
	["Components, JSX & Props", "State", "Hooks (e.g., useEffect())", "Dynamic rendering"],
	[
		"Official web page (react.dev)",
		"Next.js (Fullstack framework)",
		"React Native (build native mobile apps with React)",
	],
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeatures = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
	let listContent = "";
	for (const item of items) {
		listContent += `<li>${item}</li>`;
	}
	const list = document.createElement("ul");
	// Clear existing content
	tabContent.innerHTML = "";
	// Insert new content
	list.innerHTML = listContent;
	tabContent.append(list);
}

function highlightedButton(btn) {
	// Clear all existing styling / highlights
	btnWhyReact.className = "";
	btnCoreFeatures.className = "";
	btnResources.className = "";

	// Set new style / highlights
	btn.className = "active";
}

function handleClick(event) {
	const btnId = event.target.id;
	highlightedButton(event.target);
	if (btnId === "btn-why-react") {
		displayContent(content[0]);
	} else if (btnId === "btn-core-features") {
		displayContent(content[1]);
	} else {
		displayContent(content[2]);
	}
}

// Initially show this content
displayContent(content[0]);

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeatures.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);
