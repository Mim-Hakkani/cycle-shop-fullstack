import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://media.istockphoto.com/photos/error-page-not-found-picture-id1153372686?b=1&k=20&m=1153372686&s=170667a&w=0&h=4veHHEjI5rq2qpYWMXcHSzXfrp22SMwa79DsqqiYfAw=" alt="" style={{width:'100%',height:'800px'}} />

            <Link to="/home" className="mt-2 d-block text-center ">
                <button className="btn btn-info text-white py-2">Go HomePage</button>
            </Link>
        </div>
    );
};

export default NotFound;