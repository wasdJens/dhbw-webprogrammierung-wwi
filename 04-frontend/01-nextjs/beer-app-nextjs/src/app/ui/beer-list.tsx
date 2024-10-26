import { fetchBeers } from "../lib/beer-api"
import { BeerCard } from "./beer-card";
import { BeerCreateCard } from "./beer-create-card";
import styles from './beer-list.module.css';

export default async function BeerList() {
  const beers = await fetchBeers();

  return (
    <div className={styles.list}>
      {beers.map((beer) => (
        <BeerCard key={beer.id} providedBeer={beer}></BeerCard>
      ))}
      <BeerCreateCard></BeerCreateCard>
    </div>
  )
}