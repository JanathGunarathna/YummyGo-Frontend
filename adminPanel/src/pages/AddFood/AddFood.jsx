import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { addFood } from '../../services/foodService';

const AddFood = () => {
  const [image, setImage]= useState(null);
  const [data, setData]= useState({
    name:'',
    description:'',
    category:'Kottu',
    price:''
  });

  const onChangeHandler=(event)=>{
    const name= event.target.name;
    const value= event.target.value;
    setData( data =>({...data, [name]:value}));
  };
  
  
  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    console.log(data);
    if(!image){
      toast.error("Please upload food image");
      return; 
    }
    try {
      await addFood(data, image);
      toast.success("Food Added Successfully");
      setData({
        name:'',
        description:'', 
        category:'Kottu',
        price:''
      });
      setImage(null);
      
    } catch (error) {
      console.log(error);
      toast.error("Error while adding food");
    }
  };  

  return (
    <div className="mx-2 mt-3">
  <div className="row">
    <div className="card col-md-4">
      <div className="card-body">
        <h2 className="mb-4">Add Food</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-2">
            <label htmlFor="image" className="form-label">
              <img src={image ? URL.createObjectURL(image):assets.upload} alt="" width={94}  />
            </label>
            <input type="file" className="form-control" id="image" hidden onChange={(e)=> setImage(e.target.files[0])}/>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Food Name</label>
            <input type="text" placeholder='Chicken Kottu' className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Food Description</label>
            <textarea className="form-control" placeholder='Write descriotion of the food' id="description" rows="5" required name='description'onChange={onChangeHandler} value={data.description}></textarea>
          </div>
           <div className="mb-3">
            <label htmlFor="category" className="form-label">Food Category</label>
            <select name="category" className="form-control" id="category" required onChange={onChangeHandler} value={data.category}>
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
          </div>
           <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" placeholder='100.00' id="price" required name='price' onChange={onChangeHandler} value={data.price}/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddFood