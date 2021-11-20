import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="content">
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Portfolio</h1>
        </div>

        <nav className={styles.menu}>
          <Link href="/">
            <a
              className={
                router.pathname === "/" ? styles.selected : styles.none
              }
            >
              About
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                router.pathname === "/projects" ? styles.selected : styles.none
              }
            >
              Projects
            </a>
          </Link>
          {/* <Link href="/blog">
          <a
            className={
              router.pathname === "/blog" ? styles.selected : styles.none
            }
          >
            Blog
          </a>
        </Link> */}
          <Link href="/contact">
            <a
              className={
                router.pathname === "/contact" ? styles.selected : styles.none
              }
            >
              Contact
            </a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
