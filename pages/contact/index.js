import Head from "next/head";
import Link from "next/link";
import styles from "./Contact.module.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="keywords" content="contact" />
      </Head>
      <div className="fluid">
        <div className="content">
          <div className={styles.contact}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.block}>
              <Link href="https://www.facebook.com/ika.iriauli/">
                <a>
                  <FaFacebookSquare className={styles.facebook} />
                </a>
              </Link>
              <Link href="https://www.instagram.com/ikairiauli/">
                <a>
                  <FaInstagramSquare className={styles.instagram} />
                </a>
              </Link>
              <Link
                className={styles.linkedin}
                href="https://www.linkedin.com/in/iriauli/"
              >
                <a>
                  <FaLinkedin className={styles.linkedin} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
