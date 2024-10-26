"use client";

import { useFormStatus } from "react-dom";
import styles from "./beer-create.module.css";
import { useActionState } from "react";
import { createBeer } from "../create/actions";

const initialState = {
  name: "",
  taste: "",
  brand: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Create
    </button>
  );
}

export default function BeerCreate() {
  const [state, formAction] = useActionState(createBeer, initialState);

  return (
    <div className={styles.layout}>
      <form action={formAction}>
        <h1>New Beer 🍺</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="taste">Taste</label>
        <input type="text" id="taste" name="taste" required />
        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" name="brand" required />
        <SubmitButton />
      </form>
    </div>
  );
}
