import { useEffect, useState } from "react";
import './Table.css';

export function Table() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // `useEffect` is a synchronous operations which means using async would result in a seperate function that needs to be called inside the hook.
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((json) => {
        console.log('👀 Swapi API Response', json);
        console.table(json.results);
        setData(json.results);
      });
  }, []);

  return (
    <>
      <h1>Star Wars Films</h1>
      {!data ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((movie) => (
                <tr key={movie.episode_id}>
                  <td>{movie.title}</td>
                  <td>{movie.director}</td>
                  <td>{movie.release_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
