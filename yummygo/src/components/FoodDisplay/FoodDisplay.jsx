import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContex';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category , searchText }) => {




  const { foodList } = useContext(StoreContext);
  const filteredfoods = foodList.filter(food => {
    return (category === 'All' || food.category === category) && 
           food.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="container">
      <div className="row">
        {filteredfoods.length > 0 ? (
            filteredfoods.map((food, index)=>(
              <FoodItem
                key={index}
                name={food.name}
                description={food.description}
                id={food.id}
                imageUrl={food.imageUrl}
                price={food.price}
              />
            ))
        ):(
          <div className="text-center mt-5">
            <h4>No Food found.</h4>  
          </div>
        ) }
      </div>
    </div>
  )
}

export default FoodDisplay;