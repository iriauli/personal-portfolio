/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import styles from "./Projects.module.css";
import Data from "../api/projects.json";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

// comment
export const getStaticPaths = async () => {
  const paths = Data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = Data[id - 1];

  return {
    props: { project: data },
  };
};

const Details = ({ project }) => {
  return (
    <div className={styles.details}>
      <Head>
        <title>Projects | {project.name}</title>
        <meta name="keywords" content="projects" />
      </Head>
      <div className="fluid">
        <div className="content">
          <div className={styles.projects}>
            <div className={styles.block}>
              <h1 className={styles.projectName}>{project.name}</h1>
              <div className={styles.projectIcon}>
                <Image
                  src={project.icon}
                  width="150px"
                  height="150px"
                  alt="photo"
                />
              </div>
              <div className={styles.description}>{project.description}</div>
              <div className={styles.projectLinks}>
                <Link href={project.code} target="blank">
                  <a>
                    <button className={styles.projectDemo}>
                      See on GitHub
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
