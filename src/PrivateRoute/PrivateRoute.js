import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../context/useAuth';


const PrivateRoute = ({children,...rest}) => {
    const{user,isLoading}=useAuth()
    if(isLoading){
        return (<div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
               </div>)
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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

export default PrivateRoute;