import styles from "./Footer.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="content">
      <footer className={styles.footer}>
        <div className={styles.form}>
          <div className={styles.left}>Copyright © 2021</div>
          <div className={styles.right}>
            <div>
              <FaLinkedin size="2rem" color="#0077B5" />
              <FaGithubSquare size="2rem" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
