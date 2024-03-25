export async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
    const resData  = await response.json();

    if (!response.ok){ 
      throw new Error('failed to fetch places');
    }
    
    return resData.places 
}

export async function updateUserPlaces(places){
    //  array of places that will be stored in the backend
    //put request is expected by the backend
    fetch('https://localhost:3000/user-places' , {
        method: 'PUT',
        body: JSON.stringify({places :  places}), //here we are creating a new object which has the key property inside of which i put in our places object
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    const resData = await response.json();

    if(!response.ok){
        throw new Error('failed to update user data.')
    }

    return resData.message 
}

