import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../context/useAuth';


const AdminRoute = ({children,...rest}) => {
    const{user,isLoading,admin}=useAuth()
  
    if(isLoading){
        return (<div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
               </div>)
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;