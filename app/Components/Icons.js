import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCloud,
  faSmog,
  faSnowflake,
  faSun,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";

export default function Icons({ weatherType }) {
  switch (weatherType) {
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;

    case "Rain":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Thunderstorm":
      return <FontAwesomeIcon icon={faBolt} />;
    case "Fog":
      return <FontAwesomeIcon icon={faSmog} />;
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}
