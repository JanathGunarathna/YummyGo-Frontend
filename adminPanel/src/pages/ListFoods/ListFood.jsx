import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const ListFood = () => {
  const [list,setList]= useState([]);
  const fetchList = async()=> {
    const response = await axios.get("http://localhost:8080/api/foods");
      console.log(response.data);
      if(response.status === 200){
        setList(response.data);
      }else{
        toast.error("Failed to fetch foods");
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
                  <i className='bi bi-x-circle-fill'></i>
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