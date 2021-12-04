import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.Loading}></div>
    </div>
  );
};

export default Loader;