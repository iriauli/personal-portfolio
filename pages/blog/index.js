import Link from "next/link";
import Head from "next/head";
import styles from "./Blog.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { articles: data },
  };
};

const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="keywords" content="blog" />
      </Head>

      <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
        {articles.map((article) => (
          <Link href={"/blog/" + article.id} key={article.id}>
            <a className={styles.single}>
              <h3>{article.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
