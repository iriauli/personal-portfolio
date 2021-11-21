import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.form}>
        <div className={styles.left}>
          <h1 className={styles.title}>Hi,</h1>
          <h1 className={styles.title}>I&apos;m Irakli,</h1>
          <h1 className={styles.title}>Front-end web developer</h1>
        </div>
        <div className={styles.right}>Something</div>
      </div>
    </div>
  );
};

export default About;
