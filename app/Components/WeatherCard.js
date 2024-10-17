import { useMemo } from "react";
import styles from "../page.module.css";

export default function WeatherCard({
  city,
  currentTemperature,
  highTemperature,
  lowTemperature,
  cloudiness,
  humidity,
  windSpeed,
  cloudinessText,
}) {
  return (
    <div className={styles.weatherCardWrapper}>
      <h2>{city}</h2>
      <h3>{cloudinessText}</h3>
      <p className={styles.Temp}>{Math.round(currentTemperature)}°F</p>
      <div className={styles.idk}>
        <p>Cloudiness: {cloudiness}%</p>
        <p>High Temperature: {Math.round(highTemperature)}°F</p>
        <p>Low Temperature: {Math.round(lowTemperature)}°F</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
      </div>
    </div>
  );
}
