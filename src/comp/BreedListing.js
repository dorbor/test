import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../actions";
import BreedsComponent from "./BreedsComponent";

const BreedListing = () => {
  const breeds = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);
  console.log("Products: ", breeds);
  return (
    <div className="ui grid container">
      <BreedsComponent />
    </div>
  );
};

export default BreedListing;