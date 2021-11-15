import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Servives from '../Services/Servives';


const Home = () => {
    return (
        <div>
            
           <Header></Header>
           <Banner></Banner>
           <Servives></Servives>
           <Gallery></Gallery>
           <Reviews></Reviews>
           <Brands></Brands>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;