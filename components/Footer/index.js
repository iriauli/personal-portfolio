import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="fluid">
      <div className="content">
        <footer className={styles.footer}>
          <div className={styles.left}>Copyright © 2021</div>
          <div className={styles.right}>Content</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
