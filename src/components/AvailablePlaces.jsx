import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching , setIsFetching] = useState(false)
  const [availablePlaces , setAvailablePlaces] = useState([])
  const [error , setError] = useState()


  useEffect(() => { 
    
    async function fetchPlaces(){
    setIsFetching(true)

    try{
    const response = await fetch('http://localhost:3000/places');
    const resData  = await response.json();

    if (!response.ok){ 
       new Error('failed to fetch places');
    }
    setAvailablePlaces(resData.places)  
    }catch(error){
      setError({error.message || 'Cant get an resoponse'})
    }

    setIsFetching(false)
    }
    fetchPlaces();
  } , [])

  if(error){
    return(
      <Error title="An error has occurred" message={error.message}/>
    )
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
 

//will return a promise, that will yield different values
  //we then can use ".then " which will then do something once the value is recieved, like call a function which will automatically receive the value from the promise
  // as we have defined in the backend -- the ultimate resonse will have data the way we have specified in the backend
  // keeping fetch inside of the fuctional component -- every time the functional re-renders: everytime

// prepairing for failing to send the request 
// backend sends back shit


