import React, { useState } from 'react'
import Headers from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/exploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';

const Home = () => {
  const [category, setCategory]=useState('All');
  return (
    <main> 
      <Headers />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchText={''} />
    </main>
  )
}

export default Home