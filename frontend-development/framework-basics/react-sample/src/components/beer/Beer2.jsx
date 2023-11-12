/* eslint-disable react/prop-types */
import './Beer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Beer2({beer, children}) {
  return (
    <div className='beer-card'>
      <div className='beer-card-header'>
        <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />
        <h3>{beer.name}</h3>
      </div>
      <div className='beer-card-body'>
        <span>Taste: {beer.taste}</span>
        {children}
      </div>
    </div>
  );
}

export default Beer2;
