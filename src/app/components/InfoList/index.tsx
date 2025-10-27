import styles from './styles/style.module.css';

interface InfoListProps {
  items: object[];
}

export default function InfoList({items}: InfoListProps) {
  return (
    <ul className={styles.infoList}>
      {items.map(item => (
        <li className={styles.infoList__item}></li>
      ))}
    </ul>
  );
}
