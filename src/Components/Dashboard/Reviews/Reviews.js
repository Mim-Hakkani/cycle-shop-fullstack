import React from 'react';
import { useForm } from "react-hook-form";

const Reviews = () => {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        
        fetch('https://quiet-bayou-99262.herokuapp.com/getreview',{

        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>console.log(result));

        reset();
    };
    return (
        <div>
           <h1 className="shadow mb-4 text-center py-4">Sir! Please Review Our Product</h1> 
           <div className="border border-info w-50 p-5 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} >
           
           
            <input 

               defaultValue="" 
               {...register("name") } 
               type="text" 
               class="form-control"
               placeholder="name" 
               
               />
               <br/>
               <input 

                defaultValue="" 
                {...register("imglink") } 
                type="text" 
                class="form-control"
                placeholder="imagelink" 

                />
                   <br/>
               <input 

                defaultValue="" 
                {...register("ratting") } 
                type="taxt" 
                class="form-control"
                placeholder="Ratting" 

                />
                <br/>
            <textarea 

               defaultValue="" 
               {...register("description") } 
               type="description" 
               class="form-control"
               placeholder="description"
               
               />
            
            <br/>
          
            
            <input type="submit"  className="btn btn-danger px-4" />
        </form>
        </div>
    </div>

      
    );
};

export default Reviews;