/* eslint-disable @next/next/no-img-element */
import Head from "next/dist/shared/lib/head";
import Link from "next/link";
import styles from "./Projects.module.css";
import Data from "../api/projects.json";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(location.pathname);

  const id = location.pathname.slice(-1);
  const project = Data[id - 1];

  return (
    <div className={styles.details}>
      <Head>
        <title>Projects | {project.name}</title>
        <meta name="keywords" content="projects" />
      </Head>
      <div className="fluid">
        <div className="content">
          <div className={styles.projects}>
            <h1 className={styles.title}>
              <Link href="/projects">
                <a>
                  <MdOutlineKeyboardBackspace className={styles.back} />{" "}
                  Projects
                </a>
              </Link>
            </h1>
            <div className={styles.block}>
              <h1 className={styles.projectName}>{project.name}</h1>
              <h1 className={styles.projectDescription}>
                {project.description}
              </h1>
              <div className={styles.projectIcon}>
                <img src={project.icon} alt="photo" />
              </div>
              <div className={styles.projectLinks}>
                <Link href={project.code} target="blank">
                  <a>
                    <button className={styles.projectDemo}>
                      See on GitHub{" "}
                      <IoIosArrowRoundForward className={styles.cardArrow} />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;