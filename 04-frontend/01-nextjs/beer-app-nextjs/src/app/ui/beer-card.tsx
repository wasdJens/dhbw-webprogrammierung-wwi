"use client";

import { useState } from "react";
import styles from "./beer-card.module.css";
import BeerMug from "./beer-mug";
import { Card } from "./cards/card";
import { drinkBeer, rateBeer } from "../lib/beer-api";
import { BeerRatingSlider } from "./beer-rating-slider";

export function BeerCard({ providedBeer }) {
  const [beer, setBeer] = useState(providedBeer);

  const handleDrink = async () => {
    try {
      const apiResponse = await drinkBeer(beer);
      setBeer(() => ({ ...apiResponse.beer }));
    } catch (error) {
      console.error("Error drinking beer:", error);
    }
  };

  const handleRatingSelect = async (newRating) => {
    try {
      const apiResponse = await rateBeer(beer, newRating);
      setBeer(() => ({ ...apiResponse.beer }));
    } catch (error) {
      console.error("Error drinking beer:", error);
    }
  };

  return (
    <Card card={{ title: beer.name, subtitle: beer.brand }}>
      <div className={styles.content}>
        <BeerMug rating={beer.rating} onClick={handleDrink}></BeerMug>
      </div>
      <div className={styles.footer}>
        <h4>{beer.amount}</h4>
        <BeerRatingSlider
          currentRating={beer.rating}
          onRatingSelect={handleRatingSelect}
        ></BeerRatingSlider>
      </div>
    </Card>
  );
}
