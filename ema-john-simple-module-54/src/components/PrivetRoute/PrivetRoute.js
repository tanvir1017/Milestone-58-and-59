import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from : location }
                }}
            ></Redirect>}
        >    
        </Route>
    );
};

export default PrivetRoute;