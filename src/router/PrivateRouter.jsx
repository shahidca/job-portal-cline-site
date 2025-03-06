import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { div } from 'motion/react-client';

const PrivateRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location)
    if(loading){
        return <div><span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span></div>
    }
    if(user){
       return children
    }
    return <Navigate to='/signUp' state={location?.pathname}></Navigate>
};

export default PrivateRouter;