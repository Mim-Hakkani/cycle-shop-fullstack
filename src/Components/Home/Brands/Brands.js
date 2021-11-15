import React from 'react';
import brands from '../../image/brands.jpg'

const Brands = () => {
    return (
        <div>

            <div className="container-fluid py-5 my-4">
                <div className="row">
                    <div className="col-md-12 col-md-12 col-sm-12">
                    <h1 className="text-center py-4 shadow text-capitalize">Our Cycle Brands</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-md-12 col-sm-12">
                       <img src={brands} alt="" className="img-fluid" />
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Brands;