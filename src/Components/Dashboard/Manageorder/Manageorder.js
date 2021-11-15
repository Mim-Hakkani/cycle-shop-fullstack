import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Manageorder = () => {
    const [morders,setModers]=useState([])
    const [managedelete,setManageDelete]=useState(false)
    const [statusId,setStatusId]=useState()

    
    useEffect(()=>{
        fetch('http://localhost:5000/allorder')
        .then(res=>res.json())
        .then(data=>setModers(data))
    },[managedelete,statusId])

    const handledelete =(id)=>{

        // console.log(id)
        fetch(`http://localhost:5000/manageallorderdelete/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"}
        })
        .then(res=>res.json())
        .then(reslt =>{
            if(reslt.deletedCount>0)
                {
                    alert('are you sure to delete ..');
                    setManageDelete(reslt)
                }
            })
    }

    //update funtion status ..Approved functioanality

    const handleUpdate =(id)=>{
    fetch(`http://localhost:5000/updatestatus/${id}`,{
                method:'PUT'
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Approved Successful')
                setStatusId(id)
            })
    }

    return (
        <div>
            <h1>Manage Products</h1>

            <div>
            <h1 className="shadow text-center py-4 mb-4">Manage All Orders</h1>
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
                            <td>{order.title}</td>
                            <td>{order.date}</td>
                            <td>
                            {order.status==="Pending" ? <button onClick={()=>handleUpdate(order._id)} className="btn btn-danger">Pending</button>
                                :
                                <button onClick={()=>handleUpdate(order._id)} className="btn btn-success">Shipped</button>
                            }
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
                
            
        </div>
    );
};

export default Manageorder;