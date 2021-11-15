import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link ,useParams} from 'react-router-dom';
import useAuth from '../../../../context/useAuth';

const Singledesc = () => {
    const {user}=useAuth()
    const {serviceid} =useParams();
    const [single,setSingle]=useState({})

    useEffect(()=>{
      
        fetch(`http://localhost:5000/singleservice/${serviceid}`)
        .then(res=>res.json())
        .then(data=>setSingle(data[0]))

    },[serviceid])
  

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();

    const onSubmit = data => {

        const productDetails={
           
            userName:data.name,
            userEmail:data.email,
            phone:data.phone,
            date:data.date,
            price:single.price,
            title:single.title,
            status:'Pending'
        }
      
        
       fetch('http://localhost:5000/ordernow',{
           method:"POST",
           headers:{"content-type":"application/json"},
           body:JSON.stringify(productDetails)
       })
       .then(res=>res.json())
       .then(result =>console.log(result))
        reset();
    }



    return (
        <div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6">
                    <div className="card shadow p-3 mb-4" style={{height:'550px'}}>
                            <img className="card-img-top img-fluid" src={single.imglink} alt="Cardcap" style={{height:'300px'}} />
                            <div className="card-body">
                                <span className="d-flex align-items-center justify-content-between ">
                                    <h5 className="card-title">{single.title}</h5>
                                    <p className="card-title">{single.price} ৳</p>
                                </span>
                                
                                <p className="card-text">{single.descripsion}</p>
                               
                            </div>
                            <Link to="/explore" className="btn btn-primary">Go to Explore</Link>
                            <Link to="/dashboard" className="btn btn-info mt-2">Go to Dashboard</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} >
               
               <input 
                  {...register("name") } 
                  type="text"   
                  class="form-control"
                  defaultValue={user.displayName}
                  
                  />
                  <br/>
                 
               <input 

                  defaultValue={user.email} 
                  {...register("email") } 
                  type="email" 
                  class="form-control"
                  
                  />
                  <br/>
                  <input 

                  {...register("date") } 
                  type="date" 
                  class="form-control"
                  placeholder="Date" 
                  
                  />
                  <br/>
               <input 
 
                  {...register("phone") } 
                  type="text" 
                  class="form-control"
                  placeholder="Phone Number"

                  
                  />
               
               <br/>
              
              
               <input onClick={()=>handleSubmit()} type="submit" value="Order Now" className="btn btn-danger px-4" />
              
           </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singledesc;