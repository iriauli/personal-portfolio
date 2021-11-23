import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.form}>
        <div className={styles.greeting}>
            <h1 className={styles.firstLine}>hello</h1>
            <h1 className={styles.secondLine}>I&apos;m Irakli</h1>
            <h1 className={styles.thirdLine}>front-end</h1>
            <h1 className={styles.fourthLine}>developer</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
