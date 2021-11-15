import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link ,useParams} from 'react-router-dom';

const Singledesc = () => {
    const {serviceid} =useParams();
    const [single,setSingle]=useState({})

    useEffect(()=>{
      
        fetch(`http://localhost:5000/singleservice/${serviceid}`)
        .then(res=>res.json())
        .then(data=>setSingle(data[0]))

    },[])

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();

    const onSubmit = data => {
        
        
       fetch('http://localhost:5000/ordernow',{
           method:"POST",
           headers:{"content-type":"application/json"},
           body:JSON.stringify(data)
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
                    <div className="card shadow p-3 mb-4" style={{height:'500px'}}>
                            <img className="card-img-top img-fluid" src={single.imglink} alt="Cardcap" style={{height:'300px'}} />
                            <div className="card-body">
                                <span className="d-flex align-items-center justify-content-between ">
                                    <h5 className="card-title">{single.title}</h5>
                                    <p className="card-title">{single.price} ৳</p>
                                </span>
                                
                                <p className="card-text">{single.descripsion}</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} >
               
               <input 
                  defaultValue="" 
                  {...register("name") } 
                  type="text"   
                  class="form-control"
                  placeholder="Name"
                  defaultValue={single.title}
                  
                  />
                  <br/>
                  <input 
                  defaultValue="" 
                  {...register("imageLink") } 
                  type="text"   
                  class="form-control"
                  placeholder="Link"
                  defaultValue={single.imglink}
                  
                  /><br/>
               <input 

                  defaultValue="" 
                  {...register("email") } 
                  type="email" 
                  class="form-control"
                  placeholder="Email" 
                  
                  />
                  <br/>
                  <input 

                  defaultValue="" 
                  {...register("date") } 
                  type="date" 
                  class="form-control"
                  placeholder="Date" 
                  
                  />
                  <br/>
               <input 

                  defaultValue={single.price} 
                  {...register("price") } 
                  type="price" 
                  class="form-control"
                  placeholder="price"

                  
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