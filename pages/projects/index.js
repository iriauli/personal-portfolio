import Head from "next/head";
import styles from "./Projects.module.css";
import Data from "../api/projects.json";

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
            {Data.map((article) => (
              <div key={article.id}>
                <a className={styles.single}>
                  <h1>{article.name}</h1>
                  <h3>{article.description}</h3>
                  <p>Code: {article.code}</p>
                  <p>Demo: {article.demo}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
