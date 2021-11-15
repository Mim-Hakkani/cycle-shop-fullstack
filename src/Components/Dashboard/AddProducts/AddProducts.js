import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProducts = () => {

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        
        console.log(data);
        fetch('https://quiet-bayou-99262.herokuapp.com/addservices',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>
            {
                if(data.insertedId){
                    alert('data are successfully added');
                    console.log(data);
                }
            })

        reset();
    }

    return (
        <div>
           
            <div>
            <h1 className="py-3 text-center">Add a new products</h1>
        
        <div className="border border-info w-50 p-5 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} >
               
                <input 
                   defaultValue="" 
                   {...register("title") } 
                   type="text"   
                   class="form-control"
                   placeholder="Product title"
                   
                   /><br/>
                <input 

                   defaultValue="" 
                   {...register("imglink") } 
                   type="text" 
                   class="form-control"
                   placeholder="img url" 
                   
                   />
                   <br/>
                <input 

                   defaultValue="" 
                   {...register("price") }  
                   class="form-control"
                   placeholder="Price"
                   
                   />

                
                <br/>
                <textarea 

                defaultValue="" 
                {...register("descripsion") }  
                class="form-control"
                placeholder="Description"

                />
              
                
                <input type="submit"  className="btn btn-danger px-4 mt-3" />
            </form>
            </div>
        </div>
        </div>
    );
};

export default AddProducts;