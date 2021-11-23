/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import styles from "./Shapes.module.css";
import Data from "../../pages/api/projects.json";

const Shapes = () => {
  return (


<div className={styles.gridContainerr}>
        
          
        {Data.slice(0, 4).map((article) => (
          <div key={article.id} className={styles.gridItemm}>

            <div className={styles.shapes}>
            <Link href={article.code}>
              <div className={styles.singleShape}>
                <img className={styles.inside} src={article.icon} alt="icon" />
              </div>
            </Link>
            <Link href={article.code}>
              <h1 className={styles.firstTitle}>{article.name}</h1>
            </Link>
            <Link href={article.code}>
              <h2 className={styles.secondTitle}>{article.description}</h2>
            </Link>
          </div>
          </div>
        ))}

        </div>





  );
};

export default Shapes;
