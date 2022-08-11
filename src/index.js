import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Clearwater" />
				<footer>
					{" "}
					This project was coded by Maxine Martinez, and is{" "}
					<a
						href="https://github.com/Maxine15x/colorful-weather"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open-source on GitHub
					</a>
				</footer>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
