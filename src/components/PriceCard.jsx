import React from 'react';

export default function PriceCard({text,price}) {
    return (
        <div className='flex gap-4 font-bold sm:text-lg bg-gray-100 py-3 sm:p-4 rounded-lg'>
                <p> {text}</p>           
                <p> {price}</p>           
        </div>
    );
}

