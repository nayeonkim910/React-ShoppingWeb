import React from 'react';
import { useUserContext } from '../context/UserContext';
import {useMutation,useQueryClient ,useQuery} from '@tanstack/react-query';
import { deleteFromCart, getCart, updateCart } from '../api/firebase';

export default function useCart() {
    const {user:{uid}}=useUserContext()
    const queryClient = useQueryClient();
    const getCartQuery = useQuery(['cart',uid || ''],()=>getCart(uid),{
        enabled:!!uid,
    })

    const updateCartItem=useMutation(
        (product)=>updateCart(uid,product),
        {
         onSuccess:()=>{
            queryClient.invalidateQueries(['cart',uid]);
         }   
        }
    );
    const deleteCartItem = useMutation((id)=> deleteFromCart(uid,id),{
        onSuccess:()=>{
            queryClient.invalidateQueries(['cart',uid])
        }
    });
    return {deleteCartItem,updateCartItem,getCartQuery};


}

