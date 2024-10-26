import styles from './card.module.css';

export function CardHeader({...props}) {
  return (
    <div className={styles.header}>
      <h3>{props.card.title}</h3>
      <p>{props.card.subtitle}</p>
    </div>
  );
}