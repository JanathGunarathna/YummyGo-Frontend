import React from 'react'
import Headers from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/exploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';

const Home = () => {
  return (
    <main> 
      <Headers />
      <ExploreMenu />
      <FoodDisplay />
    </main>
  )
}

export default Home