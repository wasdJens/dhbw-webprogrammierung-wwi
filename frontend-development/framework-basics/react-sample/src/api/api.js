export const fetchBeers = async () => {
  const response = await fetch("http://localhost:8080/api/v1/beers");

  if (response.ok) {
    const data = await response.json();
    return data.items;
  } else {
    const data = [];
    return data;
  }
};

export const fetchBeer = async (id) => {
  const response = await fetch(`http://localhost:8080/api/v1/beers/${id}`);

  if (response.ok) {
    const data = await response.json();
    return {
      name: data.name,
      taste: data.taste,
      id: data.id
    }
  } else {
    const data = {};
    return data;
  }
}
