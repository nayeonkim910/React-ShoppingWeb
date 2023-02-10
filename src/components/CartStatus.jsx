import React from 'react';
import {BsFillBasket3Fill} from 'react-icons/bs';
import useCart from '../hooks/useCart';

export default function CartStatus() {
        const {getCartQuery:{data:products}}=useCart();

    return (
        <div className='relative'>
            <BsFillBasket3Fill/>
            {products&&<p className='w-6 h-5 absolute text-red-800 -top-5 text-sm font-semibold bg-yellow-200 rounded-full text-center -right-3'>{products.length}</p>}
        </div>
    );
}

