import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {

    return (
        <>
        <p className='text-7xl bg-red-100 mt-64'>ERROR: You have to Login first.</p>

        <p className='text-2xl border-b-2 border-black p-5 text-red-800 font-bold'><Link to='/'> 홈페이지로 이동하기 </Link></p>
        </>
    );
}

