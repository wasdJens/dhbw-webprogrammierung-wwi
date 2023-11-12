import './BeerList.css';
import Beer from "../beer/Beer";

function BeerList() {
  const beers = [
    { name: 'Ulmer Goldochsen Kellerbier', id: 1, taste: 'good' },
    { name: 'Wasseralfinger', id: 2, taste: 'bad' },
    { name: 'Nattheimer Spezial', id: 3, taste: 'okay' },
  ]

  const listItems = beers.map((beer, index) => {
    return <Beer key={index}></Beer>
  })

  return (
    <div>
      <h2>Beer List</h2>
      <div className='beer-list'>{listItems}</div>
    </div>
  );
}

export default BeerList;