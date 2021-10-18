const initialState = {
    isLogged: false
}


const isLogged = (state = initialState, action ) => {
    switch(action.type){
      case 'SIGN_ID':
      return !state;
      default:
         return state;
    }
}

export default isLogged;