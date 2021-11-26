import Head from "next/head";
import styles from "./Projects.module.css";
import Data from "../api/projects.json";
import Card from "../../components/Card";

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
            {Data.map((project) => (
              <div key={project.id}>
                <Card
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  code={project.code}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
