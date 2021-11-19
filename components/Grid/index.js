import styles from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={(styles.gridItem, styles.color1)}>Grid Item 1</div>
      <div className={(styles.gridItem, styles.color2)}>Grid Item 2</div>
      <div className={(styles.gridItem, styles.color3)}>Grid Item 3</div>
      <div className={(styles.gridItem, styles.color4)}>Grid Item 4</div>
      <div className={(styles.gridItem, styles.color5)}>Grid Item 5</div>
      <div className={(styles.gridItem, styles.color6)}>Grid Item 6</div>
    </div>
  );
};

export default Grid;
