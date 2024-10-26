import styles from './card.module.css';

export function CardContent({...props}) {
  return (
    <div>
      {props.children}
    </div>
  );
}