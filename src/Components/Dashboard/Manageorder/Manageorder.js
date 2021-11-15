import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const services=[
    {
        name:'Taoiona',
        price:'8500',
        img:'https://www.marketing91.com/wp-content/uploads/2017/10/Top-10-Bike-brands-in-the-World-2.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt neque soluta inventore ad voluptatum!'
    },
    {
        name:'Taoiona',
        price:'8500',
        img:'https://www.marketing91.com/wp-content/uploads/2017/10/Top-10-Bike-brands-in-the-World-2.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt neque soluta inventore ad voluptatum!'
    }]

const Manageorder = () => {
    const [morders,setModers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allorder')
        .then(res=>res.json())
        .then(data=>setModers(data))
    },[])

    return (
        <div>
            <h1>Manage Products</h1>

            <div>
            <h1 className="shadow text-center py-4 mb-4">See My Order</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Order name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">User Wish</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        morders.map(order=><tr>
                            <th scope="row">{order._id}</th>
                            <td>{order.name}</td>
                            <td>{order.date}</td>
                            <td>
                                <button className="btn btn-info">Pending</button>
                            </td>
                            <td>{order.price}</td>
                            <td>
                            
                                  {/* <button onClick={()=>handledelete(order._id)} className="btn btn-danger px-3 m-2">Delete</button> */}
                            
                                
                            </td>
                        </tr>)
                    }
                   

                    
                </tbody>
                </table>
        </div>
                
            
        </div>
    );
};

export default Manageorder;