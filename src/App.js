import './App.css';
import React, {useEffect} from 'react';
import {fetchBreeds} from './actions'
import { useSelector, useDispatch, connect } from "react-redux";
import BreedListing from './comp/BreedListing';



function App({ breedData, fetchBreeds }) {
  const breeds = breedData.breeds.breeds;
  const loading = breedData.loading;
  const error = breedData.error;

  useEffect(() => {
    fetchBreeds();

  }, []);

  return (
    <div className="App">
      <h1>Welcome to React Redux Thunk Crash Course</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {breeds.message.map(item => console.log(item))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    breedData: state.breeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBreeds: () => dispatch(fetchBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);