import styles from './card.module.css';

export function CardHeader({...props}) {
  return (
    <div>
      <h3>{props.card.title}</h3>
      <p>{props.card.subtitle}</p>
    </div>
  );
}