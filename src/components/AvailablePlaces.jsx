import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces , setAvailablePlaces] = useState([])

  useEffect(() => { 
  fetch('http://localhost:3000').then((response) => {
    return response.json()
  }).then((resData) => {
    setAvailablePlaces(resData.places)
  })    
  } , [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
 

//will return a promise, that will yield different values
  //we then can use ".then " which will then do something once the value is recieved, like call a function which will automatically receive the value from the promise
  // as we have defined in the backend -- the ultimate resonse will have data the way we have specified in the backend
  // keeping fetch inside of the fuctional component -- every time the functional re-renders: everytime
