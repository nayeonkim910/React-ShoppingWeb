import React from 'react';
import {Navigate} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function ProtectedRoute({children,requiredAdmin}) {
  
    const {user} = useUserContext();
    
        if(!user || (requiredAdmin && !user.isAdmin)){
            return  <Navigate to='/' replace/>
        }
    return children;
}

