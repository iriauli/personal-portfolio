import Head from "next/head";
import styles from "./Contact.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
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
              <div className={styles.form}>
                <div className={styles.left}>
                  <div className={styles.intro}>
                    <h2>Do you speak Georgian?</h2>
                    <h2>
                      It&apos;s ok if you don&apos;t, I speak English too.
                    </h2>
                  </div>
                  <div className={styles.social}>
                    <FaFacebookSquare size="5rem" color="#43609c" />
                    <FaInstagramSquare size="5rem" color="#ef0074" />
                    <FaLinkedin size="5rem" color="#0982c0" />
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.shapes}>
                    <div className={styles.singleShape}></div>
                    <h1 className={styles.firstTitle}></h1>
                    <h2 className={styles.secondTitle}></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
