import styles from "./Filter.module.css";
import removeBtn from "../../assets/images/icon-remove.svg";

const Filter = ({ tags, clearTags, selectTags }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags?.map((tag, index) => (
          <button key={index} className={styles["tag-btn"]}>
            <span className={styles.tag}>{tag}</span>
            <span
              onClick={() => selectTags(tag)}
              className={styles["remove-btn"]}
            >
              <img src={removeBtn} alt="remove a tag" />
            </span>
          </button>
        ))}
      </div>
      <button onClick={clearTags} className={styles["clear-btn"]}>
        Clear
      </button>
    </div>
  );
};

export default Filter;
