import styles from "./Articles.module.css";
import data from "../../pages/api/resume.json";

const Articles = () => {
  console.log(data);
  return (
    <div className={styles.articles}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus
        nunc, scelerisque a vulputate eget, lobortis a arcu. Ut urna diam,
        lacinia vel ante quis, ullamcorper porttitor mauris. Phasellus arcu
        neque, ultrices quis nisl eget, vestibulum viverra nibh. Sed ornare
        justo et posuere mollis. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aenean nisl libero, dictum vitae mauris in,
        tincidunt porttitor ante. Ut viverra tincidunt est. Phasellus ut dapibus
        sem, at blandit felis. Nullam posuere sodales dui vitae tempus. Sed quis
        arcu eu leo blandit lacinia ut sed nunc.
      </p>
    </div>
  );
};

export default Articles;
