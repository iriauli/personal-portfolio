import styles from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={styles.articles}>
      <h2 className={styles.title}>Article</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        leo elementum, malesuada lorem finibus, facilisis ligula. Nunc
        sollicitudin tincidunt convallis. Sed purus urna, consectetur sed
        pretium eget, sodales ac felis. Ut condimentum velit quis egestas
        vulputate. Praesent lacinia metus quam, eu vulputate tellus tristique
        nec. Sed sit amet sodales libero, non faucibus justo. Duis eu erat a
        velit ultrices accumsan.
      </p>
    </div>
  );
};

export default Articles;
