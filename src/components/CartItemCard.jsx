import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {MdRemoveShoppingCart} from 'react-icons/md';
import useCart from '../hooks/useCart';

const icon='hover:text-red-700 hover:scale-110 cursor-pointer';
export default function CartItemCard({product, product:{id,image,title,option,quantity,price}}){
        
        const {updateCartItem,deleteCartItem} = useCart();
        const handlePlus=()=> updateCartItem.mutate({...product, quantity:quantity+1});
        const handleMinus=()=>{
            if(quantity<2) return;
            updateCartItem.mutate({...product, quantity:quantity-1});
        }
        const handleDelete=()=>deleteCartItem.mutate(id);
        
    return (
        <li className='m-5'>
            <div className='flex items-center justify-around p-2 '>
               <img className='w-36 h-36 lg:w-52 lg:h-52 shadow-lg p-1' src={image} alt="" />
                <div className='flex-col justify-start w-full md:w-1/2  text-left text-sm md:text-lg ml-3 '>
                    <p>{title}</p>
                    <p>{price}</p>
                    <p>{option}</p>
                </div>
                <div className='flex items-center gap-2 text-2xl'>
                    <AiOutlinePlusCircle className={icon} onClick={handlePlus}/>
                    <p className='text-xl'>{quantity}</p>
                    <AiOutlineMinusCircle className={icon} onClick={handleMinus} />
                    <MdRemoveShoppingCart className={icon} onClick={handleDelete}/>
                </div>
            </div>
        </li>
    );
}

