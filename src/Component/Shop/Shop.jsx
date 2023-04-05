import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import SideCart from '../SideCart/SideCart';
import { addToDb } from '../../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data))
    },[])
    const handelClick = (product) =>{
        let newCat = [];
        const exists = cart.find(pd =>pd.id === product.id);
        if(exists){
            exists.quantity = exists.quantity+1;

        }
        const newCart = [...cart,product];
        setCart(newCart)
        addToDb(product.id);
    }
    return (
        <div className='flex justify-between p-5'>
           <div className='grid grid-cols-3 gap-5 py-10 w-[75%]'>
           {
                products.map(product=><ShowData handelClick={handelClick} key={product.id} product={product}></ShowData>)
            }
           </div>
           <div className='w-[25%] p-5'>
            <SideCart cart={cart}></SideCart>
           </div>
        </div>
    );
};

export default Shop;