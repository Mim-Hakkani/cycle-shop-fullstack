import React from 'react';
import '../Footer/Footer.css';
import payfooter from '../../image/payment_img.jpg'
const Footer = () => {
    return (
        <div>
            <div className="container-fluid" style={{background:'#EFEFEF',padding:'25px 0px'}}>
                <div className="row">
                    <div className="col-md-4">

                        <div className="footer-1 m-sm-auto m-md-auto text-lg-start text-md-start w-75">
                              <img src ="https://i.ibb.co/k5DCSZd/3-removebg-preview.png" alt="" style={{height:'150px',width:'90%'}} className="mx-auto d-block"></img>
                              <p className="text-secondary text-align-justify mt-3">tourism services means a business selling, arranging or chartering tours, transportation or accommodation for travellers, or conducting tours including, but not limited to: boat charter or tourist services, tour guide or travel agency.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                           <div className="footer-2 m-sm-auto m-md-auto text-lg-center text-md-center">
                                <h2 className="pt-5">Contact With Us</h2>
                                <ul>
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i class="fab fa-facebook-messenger"></i>
                                    <i className="fab fa-viber"></i>
                                </ul>
                                
                            </div>
                    </div>
             
                    <div className="col-md-4">
                        <img src={payfooter} alt="" className="img-fluid" />
                    </div>
                </div>
                <hr/>
                <p style={{color:'grey',textAlign:'center'}}>All Right Reserved &copy By Goalm Hakkani Mim</p>
            </div>
        </div>
    );
};

export default Footer;