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
          <FaHtml5 size="5rem" />
        </div>
        <div className={styles.gridItem}>
          <FaCss3Alt size="5rem" />
        </div>
        <div className={styles.gridItem}>
          <SiJavascript size="4.5rem" />
        </div>
        <div className={styles.gridItem}>
          <SiTypescript size="4.5rem" />
        </div>
        <div className={styles.gridItem}>
          <FaReact size="5rem" />
        </div>
        <div className={styles.gridItem}>
          <SiNextdotjs size="5rem" />
        </div>
        <div className={styles.gridItem}>
          <FaSass size="5rem" />
        </div>
        <div className={styles.gridItem}>
          <FaBootstrap size="5rem" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
