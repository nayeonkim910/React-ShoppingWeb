import React from 'react';
import {useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import {getProducts as firebaseGetProducts, addProduct as fierBaseAddProduct} from '../api/firebase';

export default function useProducts() {

    const queryClient = useQueryClient();

    const getProductsQuery = useQuery(['shop'], firebaseGetProducts,{staleTime:1000*60});

    const addProduct = useMutation(
        ({product,url})=>fierBaseAddProduct(product, url),
        {onSuccess:() =>queryClient.invalidateQueries(['shop'])}    
    );

    return {getProductsQuery, addProduct};
}

