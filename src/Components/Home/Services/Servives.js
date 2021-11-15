
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Services/Services.css';


const Servives = () => {
const [services,setServices]=useState([])

useEffect(()=>{
    fetch('https://quiet-bayou-99262.herokuapp.com/getservices')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-md-12 col-sm-12">
                    <h1 className="text-center py-4 shadow text-capitalize">Our Provided Services</h1>
                    </div>
                </div>
                
            </div>

            <div className="container my-5">
                <div className="row">
                    {
                      services.slice(0,6).map(service=>
                    
                    <div className="col-md-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="card shadow p-3 mb-4" style={{height:'500px'}}>
                            <img className="card-img-top img-fluid" src={service.imglink} alt="Cardcap" style={{height:'300px'}} />
                            <div className="card-body">
                                <span className="d-flex align-items-center justify-content-between ">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-title">{service.price} ৳</p>
                                </span>
                                
                                <p className="card-text">{service.descripsion}</p>
                                <Link to={`/singledetails/${service._id}`}>
                                    <button className="btn btn-info">Bye Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    )  
                    }
                </div>
                
            </div>

        </>
    );
};

export default Servives;