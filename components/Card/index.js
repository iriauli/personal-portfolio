import styles from "./Card.module.css";
import Link from "next/dist/client/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = (props) => {
  const { id, name, about } = props;

  return (
    <div>
      <Link href={"/projects/" + id}>
        <div className={styles.card}>
          <div className={styles.cardNumber}>
            <h2>{id}</h2>
          </div>
          <div className={styles.cardContent}>
            <h1>{name}</h1>
            <h3>{about}</h3>
          </div>

          <div className={styles.cardDetails}></div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
