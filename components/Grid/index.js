import styles from "./Grid.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";

const Grid = () => {
  return (
    <div className={styles.technologies}>
      {/* <h1 className={styles.title}>Technologies</h1> */}
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <FaHtml5 className={styles.html} />
        </div>
        <div className={styles.gridItem}>
          <FaCss3Alt className={styles.css} />
        </div>
        <div className={styles.gridItem}>
          <SiJavascript className={styles.javascript} />
        </div>
        <div className={styles.gridItem}>
          <SiTypescript className={styles.typescript} />
        </div>
        <div className={styles.gridItem}>
          <FaReact className={styles.react} />
        </div>
        <div className={styles.gridItem}>
          <SiNextdotjs className={styles.next} />
        </div>
        <div className={styles.gridItem}>
          <FaSass className={styles.sass} />
        </div>
        <div className={styles.gridItem}>
          <FaBootstrap className={styles.bootstrap} />
        </div>
      </div>
    </div>
  );
};

export default Grid;
