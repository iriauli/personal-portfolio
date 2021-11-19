import Link from "next/link";
import styles from "./404.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>Oops!</h1>
      <h2>
        This page you are looking for was moved, removed, renamed or might never
        existed.
      </h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
