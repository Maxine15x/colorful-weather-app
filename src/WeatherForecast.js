import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
	function handleResponse(response) {
		console.log(response.data);
	}

	let apiKey = "769668820f2d4467990d718542c608e8";
	let longitude = 40.7;
	let latitude = 32.0;
	let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=&${apiKey}&units=imperial`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Monday</div>
					<WeatherIcon code="01d" size={52} />
					<div className="WeatherForecast-temperature">
						<span className="WeatherForecast-temperature-max">95°</span>
						<span className="WeatherForecast-temperature-min">86°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
