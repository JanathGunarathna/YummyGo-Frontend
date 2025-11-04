import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="p-5 mb-4 light rounded-3 mt-1">
        <div className="container fluid py-5">
            <h1 className="display-5 fw-bold">Welcome to YummyGo</h1>
            <p className="col-md-8 fs-4">Discover delicious recipes, explore new cuisines, and satisfy your culinary cravings with YummyGo!</p>
            <Link to="/explore" className="btn btn-primary ">Get Started</Link>
        </div>
    </div>
  )
}

;export default Header;