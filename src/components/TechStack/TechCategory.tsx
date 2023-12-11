import styles from './techstack.module.scss';

export default function TechCategory({
  categoryName,
  items,
}: {
  categoryName: string;
  items: string[];
}) {
  return (
    <div className={`${styles.techStackItem} ${styles.techCategory}`}>
      <h4 className={styles.techCategoryTitle}>{categoryName}</h4>
      <ul className={styles.techCategoryList}>
        {items.map((value, index) => {
          //change key property value to id
          return (
            <li key={index} className={styles.techCategoryItem}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
