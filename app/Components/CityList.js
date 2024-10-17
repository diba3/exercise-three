import styles from "../page.module.css";

export default function CityList() {
  return (
    <div className={styles.list}>
      <ul>
        <li>
          <a href="/city/Seoul">Seoul</a>
        </li>
        <li>
          <a href="/city/Detroit">Detroit</a>
        </li>
        <li>
          <a href="/city/Chicago">Chicago</a>
        </li>
        <li>
          <a href="/city/Warren">Warren</a>
        </li>
      </ul>
    </div>
  );
}
