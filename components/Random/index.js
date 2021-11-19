import styles from "./Random.module.css";

const Random = () => {
  return (
    <div className={styles.random}>
      <h2 className={styles.title}>The heads on Easter Island have bodies.</h2>
      <p className={styles.text}>
        The iconic stone heads protruding from the ground on Easter Island are
        familiar to most, but many don\t realize what lies beneath the surface.
        In the \10s, archaeologists studying the hundreds of stone statues on
        the Pacific Island excavated two of the figures, revealing full torsos,
        which measure as high as 33 feet.
      </p>
      <details>
        <summary>Click here to see details</summary>
        <p>Details</p>
      </details>
    </div>
  );
};

export default Random;
