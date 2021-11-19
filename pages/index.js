import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Shapes from "../components/Shapes/index";
import Random from "../components/Random/index";
import Grid from "../components/Grid/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Hi, my name is Irakli</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h1 className={styles.title}>Projects</h1>
        <Shapes />
        <h1 className={styles.title}>Random Facts</h1>
        <Random />
        <h1 className={styles.title}>Technologies</h1>
        <Grid />
      </div>
    </>
  );
}
