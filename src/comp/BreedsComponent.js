import { useSelector } from "react-redux";

const BreedsComponent = () => {
  const breeds = useSelector((state) => state.breeds.breeds);
  const renderList = breeds.map((breed) => {
    
    return (
      <div>
        testing
      </div>
    );
  });

  return <>{renderList}</>;
};

export default BreedsComponent;