import {createContext, useContext, useEffect, useState} from 'react';
import { login, logout, userStateChange } from '../api/firebase';


const UserContext = createContext();

export function UserContextProvider({children}){
    const [user,setUser] = useState();
    
    useEffect(()=>{
        userStateChange((user)=>{
            setUser(user);
        })
    },[]);

    return (
        <UserContext.Provider value={{user,login:login, logout:logout}}>
        {children}
       </UserContext.Provider>
    ) 
}

export function useUserContext(){
    return useContext(UserContext);
}



