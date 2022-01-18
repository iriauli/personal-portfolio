/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import styles from "./Shapes.module.css";
import Data from "../../pages/api/projects.json";

const Shapes = () => {
  return (
    <div className={styles.gridContainerr}>
      {Data.slice(0, 4).map((project) => (
        <div key={project.id} className={styles.gridItemm}>
          <div className={styles.shapes}>
            <Link href={"/projects/" + project.id}>
              <div className={styles.singleShape}>
                <img className={styles.inside} src={project.icon} alt="icon" />
              </div>
            </Link>
            <Link href={"/projects/" + project.id}>
              <h1 className={styles.firstTitle}>{project.name}</h1>
            </Link>
            <Link href={"/projects/" + project.id}>
              <h3 className={styles.secondTitle}>{project.about}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shapes;
