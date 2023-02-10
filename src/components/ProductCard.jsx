import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ProductCard({product,product:{title,id,price,image}}) {
    const navigator = useNavigate();

    return (
                <li onClick={()=>{
                    navigator(`/shop/item/${id}`, {state:{product}});
                }} className='rounded-xl text-center shadow-2xl transition-all hover:scale-105 bg-slate-100 cursor-pointer '>
                    <img className='w-full md:h-96' src={image} alt="" />
                    <div>
                        <p>{title}</p>
                        <p className='font-bold'>{price}</p>    
                    </div>
                </li>

        );


}

