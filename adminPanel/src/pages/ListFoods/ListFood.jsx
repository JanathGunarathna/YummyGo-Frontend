import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import './ListFood.css'
import { deleteFood, getFoodList } from '../../services/foodService';


const ListFood = () => {
  const [list,setList]= useState([]);
  const fetchList = async()=> {
    try {
      const data = await getFoodList();
      setList(data);
    } catch (error) {
      toast.error("Failed to fetch foods");
    }
  }
  const removeFood = async (foodId) => {
   try {
      const success =await deleteFood(foodId);
      if(success){
        toast.success("Food Removed");
        await fetchList();
      }else{
        toast.error("Error occred whie removing the food");
      }
   } catch (error) {
    toast.error("Error occred whie removing the food");
    
   }
  }

  useEffect(() => {
    fetchList();
  },[]);
  
  
  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item,index)=>{
            return(
              <tr key={index}>
                <td>
                  <img src={item.imageUrl} alt="" width="50" height="50" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>Rs.{item.price}.00</td>

                <td className='text-danger'>
                  <i className='bi bi-x-circle-fill' onClick={() => removeFood(item.id)}></i>
                  {/* <button className='btn btn-danger'>Delete</button> */}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ListFood