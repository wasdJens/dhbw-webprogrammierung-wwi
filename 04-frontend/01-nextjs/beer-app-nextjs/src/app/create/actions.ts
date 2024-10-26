"use server";

import { redirect } from 'next/navigation'
import { BASE_BEER_URL } from "../lib/beer-api-url";

export async function createBeer(prevState: any, formData: FormData) {
  console.log(formData);

  const response = await fetch(`${BASE_BEER_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      taste: formData.get("taste"),
      brand: formData.get("brand"),
    }),
  });

  if (!response.ok) {
    throw new Error("Error creating beer");
  }

  redirect('/');
}
