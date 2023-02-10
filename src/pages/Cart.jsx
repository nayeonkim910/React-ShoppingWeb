import React from 'react';
import CartItemCard from '../components/CartItemCard';
import PriceCard from '../components/PriceCard';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {FaEquals} from 'react-icons/fa';
import useCart from '../hooks/useCart';
const DELIVERY_FEE = 3000;
export default function Cart() {
    const {getCartQuery:{isLoading, data:products}} = useCart();
    const hasProducts = products && products.length >0;
    const totalPrice = products && products.reduce((prev,cur)=>prev + parseInt(cur.price)*cur.quantity,0)
    
    if(isLoading) return <p>loading...</p>;
    return (
        <div className='mt-44 p-5 text-center flex-col justify-between'>
                    <h1 className='text-3xl mb-10'>나의 장바구니</h1>
                    {!hasProducts&&<h1>장바구니가 비어있습니다.</h1>}
                    <ul className='max-w-6xl m-auto'>
                         {hasProducts&&products.map((item)=>{
                            return <CartItemCard key={item.id} product={item}/>
                         })}
                    </ul>
                <div className='flex justify-around md:justify-center md:gap-10 rounded-lg text-sm md:text-lg w-full py-6 items-center '>
                    <PriceCard text='상품 총 금액' price={totalPrice}/>
                    <AiOutlinePlusCircle className='text-2xl'/>
                    <PriceCard text='배송비' price={DELIVERY_FEE}/>
                    <FaEquals className='text-2xl'/>
                    <PriceCard text='총 금액' price={totalPrice+DELIVERY_FEE}/>
                </div>
            </div>
    );
}

