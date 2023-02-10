
import React from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';

export default function Shop() {
        const {pathname} = useLocation();
        const Arr = pathname.split('/');
        const CATEGORY = Arr[2];

    return (
      <section>
        {CATEGORY=='sun'&&<Products selected='sun'/>}
        {CATEGORY=='glasses'&&<Products selected='glasses'/>}
        {CATEGORY=='all'&&<Products selected='all'/>}
      </section>
    
    );
}


