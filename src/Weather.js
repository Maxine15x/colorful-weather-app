import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
	let [weatherData, setWeatherData] = useState({ ready: false });
	let [city, setCity] = useState(props.defaultCity);

	function showTemperature(response) {
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			city: response.data.name,
			icon: response.data.weather[0].icon,
			temperature: response.data.main.temp,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		searchEngine();
	}

	function handleSearch(event) {
		setCity(event.target.value);
	}

	function searchEngine() {
		let apiKey = "769668820f2d4467990d718542c608e8";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
		axios.get(apiUrl).then(showTemperature);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<input
						type="search"
						placeholder="Search a city..."
						autoFocus="on"
						className="search-location"
						onChange={handleSearch}
					/>
					<input
						type="submit"
						value="Search"
						className="search-control btn bg-gradient"
					/>
				</form>
				<WeatherDetails data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		searchEngine();
		return "Loading...";
	}
}
