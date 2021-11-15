import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';


const Reviews = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://quiet-bayou-99262.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-md-12 col-sm-12">
                <h1 className="text-center py-4 shadow text-capitalize">Clint Review's</h1>
                </div>
            </div>
            
        </div>

        <div className="container my-5">
            <div className="row">
                {
                  reviews.map(review=>
                
                <div className="col-md-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="card shadow p-3 mb-4" style={{height:'550px'}}>
                        <img className="card-img-top animate__animated animate__fadeInUp" src={review.imglink} alt="" />
                        <div className="card-body">
                            <span className="d-flex align-items-center justify-content-between">
                                <h5 className="card-title ">{review.name}</h5>
                                <span>
                                   
                                    <Rating
                                       initialRating={review.ratting}
                                        readonly
                                        style={{color:'gold'}}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    />
                                </span>
                                
                              
                            </span>
                            
                            <p className="card-text">{review.description}</p>
                          
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

export default Reviews;