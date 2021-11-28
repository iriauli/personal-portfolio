import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { ImQrcode } from "react-icons/im";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fluid2">
      <div className="content">
        <header className={styles.header}>
          <div className={styles.logo}>
            <ImQrcode size="2rem" />
          </div>

          <nav className={styles.menu}>
            <Link href="/">
              <a className={router.pathname === "/" ? styles.selected : ""}>
                About
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={
                  router.pathname === "/projects" ? styles.selected : ""
                }
              >
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact" ? styles.selected : ""
                }
              >
                Contact
              </a>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
