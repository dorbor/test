export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


export const getBreedsRequest = () => {
  return {
    type: 'GET_BREEDS_REQUEST'
  }
}

export const getBreedsSuccess = (breeds) => {
  return {
    type: 'GET_BREEDS_SUCCESS',
    payload: breeds
  }
}

export const getBreedsFailure = (breeds) => {
  return {
    type: 'GET_BREEDS_FAILURE',
    payload: breeds
  }
}


const url = "https://dog.ceo/api/breeds/list/all";

export const fetchBreeds = () => {
  return (dispatch) =>  {
    dispatch(getBreedsRequest());
    fetch(url, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      const breeds = data;
      dispatch(getBreedsSuccess(breeds));
    })
    .catch((error) => {
      const errorMessage = error.message;
      dispatch(getBreedsFailure(errorMessage));
    })
  }
}
