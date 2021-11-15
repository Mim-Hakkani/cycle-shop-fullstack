import React from 'react';
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div>
            
            <div className="banner-bg">
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="banner-text text-white">
                                <h1 
                                className="animate__animated animate__fadeInUp animate__delay-0.2">Bycyle STore</h1>
                                <h3 className="animate__animated animate__fadeInDown animate__delay-0.4">Time For Riding Bycyle</h3>
                                <p>Finally, the time has come and in many places the summer weather invites you to ride more regularly again. But is your bike ready or has the cold and wet spring left its traces? What about brakes, drivetrain, tires and inner tubes – is everything running smoothly?</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img 
                               src="https://i.ibb.co/WW37np2/1-removebg-preview.png" 
                               alt="" 
                               class="animate__animated animate__fadeInRight animate__delay-1s img-fluid"
                               height="320px"
                               style={{marginTop:'30px'}}
                               
                               />

                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;