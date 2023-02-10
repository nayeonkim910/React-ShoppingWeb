import React from 'react';

const SIDE_CLASS ='h-screen w-full sm:py-40  sm:px-24 lg:px-0 px-5 py-64';
const CENTER_CLASS='h-screen w-full sm:py-20  sm:px-24 lg:px-0 px-5 py-64';
const BOX_CLASS ='grid lg:grid-cols-3 gap-2 relative p-2';

export default function Banner({img1,img2,img3}) {
    return (
               <div className={BOX_CLASS}>
                 <img className={SIDE_CLASS} src={img1} alt="" />
                 <img className={CENTER_CLASS} src={img2} alt="" />
                 <img className={SIDE_CLASS}src={img3} alt="" />
               </div>
    );
}

