import Head from "next/head";
import styles from "./Blog.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((article) => {
    return {
      params: { id: article.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { article: data },
  };
};

const blogDetails = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.name}</title>
        <meta name="keywords" content="blog" />
      </Head>
      <div className={styles.container}>
        <h1>{article.name}</h1>
        <p>{article.email}</p>
        <p>{article.website}</p>
        <p>{article.address.city}</p>
      </div>
    </>
  );
};

export default blogDetails;
