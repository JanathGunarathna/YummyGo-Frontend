import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { categories } from '../../assets/assets'

const explore = () => {
  const [category, setCategory]= useState('All');
  const [ searchText, setsearchText] = useState('');

  return (

    <>
     <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => {
              e.preventDefault();
            }}>
              <div className="input-group mb-3">
                <select className="form-select mt-2" style={{'maxWidth':'150px'}} onChange={(e) => setCategory(e.target.value)} value={category}>
                  <option value='All'>All Categories</option>
                  <option value='kottu'>Kottu</option>
                  <option value='pizza'>Pizza</option>
                  <option value='rice'>Rice</option>
                  <option value='cake'>Cake</option>
                  <option value='icecream'>Ice Cream</option>
                  <option value='biryani'>Biryani</option>
                  <option value='thosa'>Thosa</option>
                  <option value='stick'>Stick</option>
                  <option value='salad'>Salad</option>
                  <option value='parata'>Parata</option>
                </select>
                <input type="text" className="form-control mt-2" id="searchInput" placeholder="Search your favorite dish..." 
                onChange ={(e) => setsearchText(e.target.value)} />
                <button className="btn btn-primary mt-2" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay category={category} searchText={searchText} />
    </>
  )
}

export default explore