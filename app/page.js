import WeatherCard from "./Components/WeatherCard";
import HeaderCard from "./Components/HeaderCard";
import styles from "./page.module.css";
import CityList from "./Components/CityList";
import Icons from "./Components/icons";

export default async function Home() {
  const city = "paris";
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;

  const request = await fetch(queryURL);
  const weatherData = await request.json();

  if (!weatherData) return null;

  const cloudPercent = 99 - weatherData.clouds.all;
  const background = `linear-gradient(30deg, #d243a2, ${cloudPercent}%, #00d4ff)`;
  return (
    <div className={styles.page}>
      <HeaderCard image="hello" />
      <main className={styles.main}>
        <div className={styles.bigDiv} style={{ background }}>
          <div className={styles.pic}>
            <Icons weatherType={weatherData.weather[0].main} />
          </div>
          <div className={styles.Card}>
            <WeatherCard
              city={city}
              currentTemperature={weatherData.main.temp}
              highTemperature={weatherData.main.temp_max}
              lowTemperature={weatherData.main.temp_min}
              cloudiness={weatherData.clouds.all}
              humidity={weatherData.main.humidity}
              windSpeed={weatherData.wind.speed}
              cloudinessText={weatherData.weather[0].description}
            />
          </div>

          <div className={styles.citylistStle}>
            <CityList />
          </div>
        </div>
      </main>
    </div>
  );
}
