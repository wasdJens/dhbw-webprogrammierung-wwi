import React from "react";
import { CardContent } from "./card-content";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import styles from "./card.module.css";

export function Card({ children, ...props }) {
  const [content, footer] = React.Children.toArray(children);

  return (
    <div className={styles.card}>
      <CardHeader {...props}></CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </div>
  );
}
