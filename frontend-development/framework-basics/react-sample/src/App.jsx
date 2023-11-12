import './App.css'
import Beer from './components/beer/Beer'
import BeerCreate from './components/BeerCreate'
import BeerList from './components/lists/BeerList'
import BeerList2 from './components/lists/BeerList2'
import BeerList3 from './components/lists/BeerList3'

function App() {
  return (
    <>
      <h1 className='title'>Hello React!</h1>
      <Beer></Beer>
      {/* <BeerList></BeerList> */}
      {/* <BeerList2></BeerList2> */}
      {/* <BeerList3></BeerList3> */}
    </>
  )
}

export default App
