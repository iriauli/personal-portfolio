import styles from "./Footer.module.css";
import Link from "next/dist/client/link";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="content">
      <footer className={styles.footer}>
        <div className={styles.form}>
          <div className={styles.left}>© 2021</div>
          <div className={styles.right}>
            <div className={styles.icon}>
              <Link href="https://github.com/iriauli">
                <FaGithubSquare size="2rem" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
