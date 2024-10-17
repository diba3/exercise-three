import styles from "../page.module.css";

export default function HeaderCard({ image }) {
  const date = new Date();
  const hr = date.getHours();
  let saying = "";

  if (hr < 12) {
    saying = "Good Morning!";
  } else if (hr < 16) {
    saying = "Good Afternoon!";
  } else if (hr < 20) {
    saying = "Good Evening!";
  } else {
    saying = "Good Night!";
  }
  console.log({ hr });

  return (
    <nav className={styles.NavWrapper}>
      <div className={styles.picture}>
        <h1>Weather App</h1>
      </div>
      <div className={styles.Saying}>
        <p>{saying}</p>
      </div>
    </nav>
  );
}
