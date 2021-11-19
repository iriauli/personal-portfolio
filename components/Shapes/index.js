import { useRouter } from "next/router";
import styles from "./Shapes.module.css";

const Shapes = () => {
  const router = useRouter();
  return (
    <div className={styles.horizontal}>
      <div className={styles.shapes}>
        <div className={styles.singleShape}>
          <h1></h1>
        </div>
        <h1 className={styles.firstTitle}>github user manager</h1>
        <h2 className={styles.secondTitle}>
          Final Project for Tbilisi School of Communication
        </h2>
      </div>

      <div className={styles.shapes}>
        <div className={styles.singleShape}>
          <h1></h1>
        </div>
        <h1 className={styles.firstTitle}>millionaire app</h1>
        <h2 className={styles.secondTitle}>
          Who Wants to Be a Millionaire App
        </h2>
      </div>

      <div className={styles.shapes}>
        <div className={styles.singleShape}>
          <h1></h1>
        </div>
        <h1 className={styles.firstTitle}>client side form validation</h1>
        <h2 className={styles.secondTitle}>Handle and Validate React Forms</h2>
      </div>
    </div>
  );
};

export default Shapes;
