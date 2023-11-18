import { useLoaderData } from "react-router-dom";
import { fetchBeer } from "../../api/api";
import Beer2 from "../beer/Beer2";

export async function beerDetailLoader({ params }) {
  const beer = await fetchBeer(params.beerId);
  return { beer };
}

function BeerDetail() {
  const { beer } = useLoaderData();

  return (
    <>
      <Beer2 beer={beer}></Beer2>
    </>
  );
}

export default BeerDetail;
