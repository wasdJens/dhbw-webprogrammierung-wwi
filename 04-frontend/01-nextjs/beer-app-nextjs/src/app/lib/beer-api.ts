import { BASE_BEER_URL } from "./beer-api-url";

export async function drinkBeer(beer) {
  const response = await fetch(`${BASE_BEER_URL}/${beer.id}/drink`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beer),
  });

  if (!response.ok) {
    throw new Error("Failed to drink beer");
  }

  const data = await response.json();
  return data;
}

export async function rateBeer(beer, rating) {
  const response = await fetch(`${BASE_BEER_URL}/${beer.id}/rate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating: rating }),
  });

  if (!response.ok) {
    throw new Error("Failed to rate beer");
  }

  const data = await response.json();
  return data;
}

export async function fetchBeers() {
  const response = await fetch(BASE_BEER_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch beers");
  }

  const data = await response.json();
  return data;
}