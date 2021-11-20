import Head from "next/head";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="keywords" content="contact" />
      </Head>

      <div className="content">
        <div className={styles.contact}>
          <h1 className={styles.title}>Contact</h1>
          <div className={styles.form}>
            <div className={styles.left}>
              <h2>
                Do you speak Georgian? It\s ok if you don\t, I speak English
                too.
              </h2>
              <div className={styles.social}>Twitter, Facebook</div>
            </div>
            <div className={styles.right}>
              Photo
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
