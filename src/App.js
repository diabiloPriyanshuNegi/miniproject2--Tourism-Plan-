import React,{useState} from 'react';
import './App.css';
import Tours from './Component/Tours'
import data from './data';

function App() {
  const [tours,setTours]=useState(data);

  function removeCard(id){
    const newTour=tours.filter(tour=>tour.id!==id);
    setTours(newTour);
  }
  function refreshhandler(){
    setTours(data);
  }
  if(tours.length===0){
    return(<div>
      <h3>No Tour Left</h3>
      <button onClick={refreshhandler}>Refresh</button>
    </div>)
  }
  return (
    <div className="App">
      <Tours tours={tours} removeCard={removeCard}></Tours>
    </div>
  );
}

export default App;
