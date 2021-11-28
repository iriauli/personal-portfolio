import styles from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={styles.articles}>
      <h2 className={styles.title}>Article</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        leo elementum, malesuada lorem finibus, facilisis ligula. Nunc
        sollicitudin tincidunt convallis. Sed purus urna, consectetur sed
        pretium eget, sodales ac felis.
      </p>
    </div>
  );
};

export default Articles;
