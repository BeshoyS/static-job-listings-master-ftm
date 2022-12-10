import styles from "./ListingCard.module.css";

const ListingCard = ({ listing, selectTags }) => {
  const {
    company,
    logo,
    new: newBadge,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = listing;

  return (
    <div className={`${styles.container}`}>
      {featured && <div className={styles["container-featured"]}></div>}
      <div className={styles["listing-details"]}>
        <div className={styles.logowrapper}>
          <img src={logo} alt="" />
        </div>
        <div className={styles["listing-info"]}>
          <div className={styles["title-badges"]}>
            <p className={styles.company}>{company}</p>
            {newBadge && <span className={styles["new-badge"]}>new!</span>}
            {featured && (
              <span className={styles["featured-badge"]}>featured</span>
            )}
          </div>
          <h2 className={styles.position}>{position}</h2>
          <div className={styles.demographies}>
            <p className={styles["posted-at"]}>{postedAt}</p>
            <p className={styles.contract}>{contract}</p>
            <p className={styles.location}>{location}</p>
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.tags}>
        {[role, level, ...languages, ...tools].map((tag, index) => (
          <button
            key={index}
            onClick={() => selectTags(tag)}
            className={styles.btn}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListingCard;
