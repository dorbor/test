const initialState = {
    breeds: [],
    loading: false,
    error: null
};


const breeds = (state = initialState, action) => {
    switch(action.type){
        case "GET_BREEDS_REQUEST":
            return { ...state, loading: true};
        case "GET_BREEDS_SUCCESS":
        return {...state, loading: false, breeds:action.payload};
        case "GET_BREEDS_FAILURE":
        return {...state, loading: false, error:action.payload};
        default: 
            return state;
    }
}

export default breeds;