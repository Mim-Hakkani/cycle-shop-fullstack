import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Myorder = () => {

    //for testing purpose
    const email = 'mim4g@gmail.com'

    console.log(email);

    const [orders,myordrs]=useState([])
    const [deleteorder,setDeleteorder]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:5000/myorder/${email}`)
        .then(res=>res.json())
        .then(data=>myordrs(data))
    },[deleteorder])


    const handledelete =(id)=>{

       
            fetch(`http://localhost:5000/deleteorder/${id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
                
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount)
                {
                    alert('do you want to delete ? ');
                  
                }
                setDeleteorder(data)
            })
       
    }

    return (
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
                        orders.map(order=><tr>
                            <th scope="row">{order._id}</th>
                            <td>{order.name}</td>
                            <td>{order.date}</td>
                            <td>
                                <button className="btn btn-info">Pending</button>
                            </td>
                            <td>{order.price}</td>
                            <td>
                            
                                  <button onClick={()=>handledelete(order._id)} className="btn btn-danger px-3 m-2">Delete</button>
                            
                                
                            </td>
                        </tr>)
                    }
                   

                    
                </tbody>
                </table>
        </div>
    );
};

export default Myorder;