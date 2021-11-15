import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';

const Myorder = () => {

    
    const {user}=useAuth()

   

    const [orders,myordrs]=useState([])
    const [deleteorder,setDeleteorder]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:5000/myorder/${user.email}`)
        .then(res=>res.json())
        .then(data=>myordrs(data))
    },[deleteorder,user.email])


    const handledelete =(id)=>{

       
            fetch(`http://localhost:5000/deleteorder/${id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
                
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0)
                {
                    alert('do you want to delete ? ');
                    setDeleteorder(data)
                }
               
            })
       
    }

    return (
        <div>
            <h1 className="shadow text-center py-4 mb-4">See My Order</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Order_Id</th>
                    <th scope="col">P_Name</th>
                    <th scope="col">user_name</th>
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
                            <td>{order.title}</td>
                            <td>{order.userName}</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
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