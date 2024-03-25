import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching , setIsFetching] = useState(false)
  const [availablePlaces , setAvailablePlaces] = useState([])
  const [error , setError] = useState()


  //super common to have 2 states together -- data -- loading -- error

  useEffect(() => { 
    
    async function fetchPlaces(){
    setIsFetching(true)

    try{
      
      const places = await fetchAvailablePlaces();

      navigator.geolocation.getCurrentPosition((position) => {
       const sortedPlaces = sortPlacesByDistance(resData.places , position.coords.latitude , position.coords.longitude)
        setAvailablePlaces(resData.places)
        setIsFetching(false)
      } )

    }catch(error){

      setError({message : error.message || 'Could not fetch places,, please try again later'})
    }
    setIsFetching(false)
    }
    fetchPlaces();
  } , [])

  if(error){
    return   <Error title="An error has occurred" message={error.message}/>
  }

  //response.ok is a ibuilt property built into the object formed by fetch 
  // ERRORS --- 2 main ways of failing
    // network crash
    // backend sends back an error resoponse
  // if response.ok -- is false i.e the backend didn't send back the correct data -- with a status code of 200-300

  // try catch is used to prevent the whole script from crashing when an error occurs

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



// HANDLEING HTTP REQUESTS -- AND HADLING ERRORS

//send the request so that our selection is stored there then also 
  //store the thing in the backend 
  // fetch the thing from the backend and show it to the users
  // only expects the  requests that it wants that is the way 

