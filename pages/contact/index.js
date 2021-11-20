import Head from "next/head";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="keywords" content="contact" />
      </Head>
      <div className="fluid">
        <div className="content">
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.text}>
            Do you speak Georgian? It\s ok if you don\t, I speak English too.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
