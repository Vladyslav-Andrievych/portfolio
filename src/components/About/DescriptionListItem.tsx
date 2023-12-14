import styles from './about.module.scss';

export default function DescriptionListItem({
  children,
  property,
  value,
}: {
  children: React.ReactNode;
  property: string;
  value: string;
}) {
  return (
    <li className={styles.descriptionItem}>
      {children}
      <span className={styles.descriptionItemProperty}>{property}</span>
      <span className={styles.descriptionItemValue}>{value}</span>
    </li>
  );
}
