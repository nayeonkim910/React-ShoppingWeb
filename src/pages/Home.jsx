import React from 'react';
import Banner from '../components/Banner';
import '../index.css';
export default function Home() {
 
    return (
        <section className='flex flex-col bg-black sm:bg-white' >
            <div> <img  className='h-screen w-screen' src="/img/back-1.jpg" alt="" /></div>
           <Banner img1={'/img/im-3.jpg'} img2={'/img/im-2.jpg'} img3={'/img/im-1.jpg'}/>
           <Banner img1={'/img/rr-1.jpg'} img2={'/img/rr-3.jpg'} img3={'/img/rr-3.jpg'}/>
           <Banner img1={'/img/pp-3.jpg'} img2={'/img/pp.jpg'} img3={'/img/pp-4.jpg'}/>
        </section>
    );
    

}





