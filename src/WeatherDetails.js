import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
	return (
		<div className="WeatherDetails">
			<h1>{props.data.city}</h1>
			<div className="row">
				<div className="col-12">
					<WeatherIcon code={props.data.icon} size={66} />
					<WeatherTemperature fehrenheit={props.data.temperature} />
					<img src={props.data.icon} alt="" />
				</div>
			</div>
			<div className="weather-overview">
				<div className="row">
					<div className="col-12">
						<ul>
							<li>
								<CurrentDate date={props.data.date} />
							</li>
							<li className="text-capitalize">{props.data.description}</li>
							<li>Humidity: {props.data.humidity}%</li>
							<li>Wind Speed: {props.data.wind} mph</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
