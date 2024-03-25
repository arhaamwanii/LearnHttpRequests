import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces } from './http.js';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    // also wanna send this updated array to the backend 
    try{
    await updateUserPlaces([selectedPlace , ...userPlaces]);
    }catch(error){
      setUserPlaces(userPlaces)
    }

  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    setModalIsOpen(false);
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />

      </main>
    </>
  );
}

export default App;

// OPTIMSTIC UPDATING
// FOOD ORDERIGN APP IN THIS SECTION WE ARE GOING TO BUILD AN FOOD ORDER APP EDIT THEM IN THE CART SUBMIT THE ORDER TO THE BACK END WE WILL FRONT END THAT WE ARE GOING TO HAVE TO  TO SIMPLY TOGETHER AND USE THEM ALL TOGETHER WE DEFFINETLY ON YOUR 
// you update the ui , in the bg you send the request to the backend to update the ui and if that fails -- you roll back the changes that you made on the frontend
// backend we need to connecting to the backend
// fetch async await resopon

// AUTHENTICATION
// how to authenticate users 

// hugging face api so we get the thing we are going to have to make the thing we are there we were in therer to 


