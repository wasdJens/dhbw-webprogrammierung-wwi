import './Beer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Beer() {
  return (
    <div className='beer-card'>
      <div className='beer-card-header'>
        <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />
        <h3>Ulmer Goldochsen Kellerbier</h3>
      </div>
      <div className='beer-card-body'>
        <span>Taste: Good</span>
      </div>
    </div>
  );
}

export default Beer;