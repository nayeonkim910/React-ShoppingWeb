import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import useCart from '../hooks/useCart';

export default function ProductDetailPage() {
    const { state: { product: { id, price, image, option, description, title } } } = useLocation();
    const {updateCartItem} = useCart();
    const [selected,setSelected] = useState(option&&option[0]);
    const [success, setSuccess] = useState(false);
   
    const handleOption =(e)=>setSelected(e.target.value);
   
    const handleClick=()=>{
        const product={quantity:1, id,price,image,title,option:selected};
        updateCartItem.mutate(product,{
            onSuccess:()=>{
                setSuccess('true');
                setTimeout(()=>setSuccess(false),3000);
            }
        });
    }
   
    return (
        <div className='mt-40 flex flex-col lg:flex-row   gap-10 p-5 md:p-28'>
            <img className='w-full md:1/3 lg:w-1/2 ' src={image} alt="" />
            <div className=' py-30 px-10 text-xl '>
                <p className='text-2xl font-bold py-2'>{title}</p>
                <p className=' font-bold my-3 border-b-4 border-red-900'>{price}</p>
                <p className='text-lg'>{description}</p>
                    <div className='flex items-center text-center py-3 gap-5'>
                        <label htmlFor="option" className='font-bold text-red-800'>옵션</label>
                        <select id='option' onChange={handleOption} value={selected} className='text-center w-4/6 border-2 border-black rounded-md'>
                            {option&&option.map((op,idx)=><option key={idx}>{op}</option>)}
                        </select>
                    </div>
                <button className='my-5 px-10 py-4 rounded-full w-full bg-black text-white transition-all ease-in hover:bg-red-800' onClick={handleClick}>{success?'추가되었습니다':'장바구니 담기'}</button>
            </div>
        </div>
    );
}

