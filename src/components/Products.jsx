import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import ErrorPage from '../pages/ErrorPage'; 

export default function Products({selected}) {
    const {
    getProductsQuery: {error, data:products}} = useProducts();

    return (
        <div className='mt-48 xl:mt-28'>
                {error&& <ErrorPage/>}
               <ul className='grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 gap-5'>
           {products&&products.map((item)=>{
                if(item.category===selected){
                    return <ProductCard key={item.id} product={item}/>
                }
                else if(selected==='all'){
                    return <ProductCard key={item.id} product={item}/>
                }
               })}
               </ul>
        </div>
    );
}

