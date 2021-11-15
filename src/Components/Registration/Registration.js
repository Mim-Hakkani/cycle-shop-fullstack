import React from 'react';
import { useForm } from "react-hook-form";
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../context/useAuth'

const Registration = () => {
    const {registerUser}=useAuth()
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        
        console.log(data)
        registerUser(data.email, data.password, data.name, history)
        reset();
    }


    return (
        <div>
            <h1 className="py-3 text-center">Registration</h1>
        
        <div className="border border-info w-50 p-5 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} >
               
                <input 
                   defaultValue="" 
                   {...register("name") } 
                   type="text"   
                   class="form-control"
                   placeholder="Name"
                   
                   /><br/>
                <input 

                   defaultValue="" 
                   {...register("email") } 
                   type="email" 
                   class="form-control"
                   placeholder="Email" 
                   
                   />
                   <br/>
                <input 

                   defaultValue="" 
                   {...register("password") } 
                   type="password" 
                   class="form-control"
                   placeholder="Password"
                   
                   />
                
                <br/>
                <Link to="/signin">
                   <p>
                       Already Registered ? Sign in 
                   </p>
                </Link>
                
                <input type="submit"  className="btn btn-danger px-4" />
            </form>


           
            </div>
        </div>
    );
};

export default Registration;