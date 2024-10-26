import styles from './card.module.css';

export function CardFooter({...props}) {
  return (
    <div>
      {props.children}
    </div>
  );
}