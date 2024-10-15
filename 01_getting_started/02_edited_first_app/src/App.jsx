import { useState } from "react";
import "./App.css";

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
	[
		"Vanilla JavaScript requires imperative programming",
		"Imperative Programming: You define all the steps needed to achieve a result",
		"React on the other hand embraces declarative programming",
		"With React, you define the goal and React figures out how to get there",
	],
];

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<header>
					<img src="react-logo-xs.png" alt="React logo" />
					<div>
						<h1>React.js</h1>
						<p>i.e., using the React library for rendering the UI</p>
					</div>
				</header>

				<div id="tabs">
					<menu>
						<button className={count === 0 ? "active" : ""} onClick={() => setCount(0)}>
							Why React?
						</button>
						<button className={count === 1 ? "active" : ""} onClick={() => setCount(1)}>
							Core Features
						</button>
						<button className={count === 2 ? "active" : ""} onClick={() => setCount(2)}>
							Related Resources
						</button>
						<button className={count === 3 ? "active" : ""} onClick={() => setCount(3)}>
							React vs JS
						</button>
					</menu>
					<div id="tab-content">
						<ul>
							{content[count].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
