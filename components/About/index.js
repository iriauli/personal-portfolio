import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.form}>
        <div className={styles.left}>
          <h1 className={styles.title}>Hi,</h1>
          <h1 className={styles.title}>I&apos;m Irakli,</h1>
          <h1 className={styles.title}>web developer.</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.shapes}>
            <div className={styles.singleShape}></div>
            <h1 className={styles.firstTitle}></h1>
            <h2 className={styles.secondTitle}></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
