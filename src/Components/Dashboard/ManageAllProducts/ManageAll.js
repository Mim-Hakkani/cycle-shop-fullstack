import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAll = () => {
    const [services,setServices]=useState([])
    const[managedelete,setManagedelete]=useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/getservices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[managedelete])

    const handledelete=(id)=>{

     
      fetch(`http://localhost:5000/managealldelete/${id}`,{
          method:"DELETE",
          headers:{'content-type':"application/json"}
      })
      .then(res=>res.json())
      .then(result=>setManagedelete(result))
    }

    return (
        <div>
            <div className="container my-5">
        <div className="row">
            {
              services.map(service=>
            
            <div className="col-md-4 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow p-3 mb-4" style={{height:'500px'}}>
                    <img className="card-img-top img-fluid" src={service.imglink} alt="Cardcap" style={{height:'300px'}} />
                    <div className="card-body">
                        <span className="d-flex align-items-center justify-content-between ">
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-title">{service.price} ৳</p>
                        </span>
                        
                        <p className="card-text">{service.descripsion}</p>
                        
                            <button onClick={()=>handledelete(service._id)} className="btn btn-danger">Delete</button>
                        
                    </div>
                </div>
            </div>

            )  
            }
        </div>
        
    </div>
        </div>
    );
};

export default ManageAll;