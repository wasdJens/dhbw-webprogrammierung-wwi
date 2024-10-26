import Link from "next/link";
import styles from "./beer-card.module.css";
import { Card } from "./cards/card";

export function BeerCreateCard() {
  const CreateIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100"
      height="100"
    >
      <line x1="4" y1="12" x2="20" y2="12" stroke="black" strokeWidth="2" />
      <line x1="12" y1="4" x2="12" y2="20" stroke="black" strokeWidth="2" />
    </svg>
  );

  return (
    <Link href="/create">
      <Card
        card={{
          title: "Create a new beer",
          subtitle: "",
        }}
      >
        <div className={styles.content}>
          <CreateIcon></CreateIcon>
        </div>
        <div className={styles.footer}>
          <p>Add a new beer to the list</p>
        </div>
      </Card>
    </Link>
  );
}
