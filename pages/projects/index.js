import Head from "next/head";
import styles from "./Projects.module.css";
import Data from "../api/projects.json";
import Link from "next/dist/client/link";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="keywords" content="projects" />
      </Head>

      <div className="fluid">
        <div className="content">
          <div className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.block}>
              {Data.map((article) => (
                <div className={styles.card} key={article.id}>
                  <div className={styles.left}>
                    <a className={styles.singleProject}>
                      <h1>{article.name}</h1>
                      <h3>{article.description}</h3>
                    </a>
                  </div>
                  <div className={styles.right}>
                    <Link href={article.code}>
                      <div className={styles.code}>See More</div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
