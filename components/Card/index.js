import styles from "./Card.module.css";
import Link from "next/dist/client/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/router";

const Card = (props) => {
  const { id, name, description } = props;
  const router = useRouter();

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardNumber}>
          <h2>{id}</h2>
        </div>
        <div className={styles.cardContent}>
          <h1>{name}</h1>
          <h3>{description}</h3>
        </div>

        <div className={styles.cardDetails}>
          <Link href={"/projects/" + id}>
            <h3 className={styles.cardMore}>
              See More <IoIosArrowRoundForward className={styles.cardArrow} />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
