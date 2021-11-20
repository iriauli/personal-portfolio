/* eslint-disable @next/next/no-img-element */
import styles from "./Shapes.module.css";
import Data from "../../pages/api/projects.json";

const Shapes = () => {
  return (
    <div className={styles.projects}>
      {/* <h1 className={styles.title}>Projects</h1> */}
      <div className={styles.horizontal}>
        {Data.slice(0, 3).map((article) => (
          <div key={article.id} className={styles.shapes}>
            <div className={styles.singleShape}>
              <img className={styles.inside} src={article.icon} alt="icon" />
            </div>
            <h1 className={styles.firstTitle}>{article.name}</h1>
            <h2 className={styles.secondTitle}>{article.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shapes;
