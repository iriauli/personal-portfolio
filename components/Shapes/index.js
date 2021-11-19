import { useRouter } from "next/router";
import styles from "./Shapes.module.css";
import Data from "../../pages/api/projects.json";

const Shapes = () => {
  const router = useRouter();
  return (
    <div className={styles.horizontal}>
      {Data.slice(0, 3).map((article) => (
        <div key={article.id} className={styles.shapes}>
          <div className={styles.singleShape}></div>
          <h1 className={styles.firstTitle}>{article.name}</h1>
          <h2 className={styles.secondTitle}>{article.description}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shapes;
