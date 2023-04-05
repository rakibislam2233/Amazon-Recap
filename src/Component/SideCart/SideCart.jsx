import React from 'react';

const SideCart = ({cart}) => {
    let price = 0;
    let shipping = 0;
    let total = 0;
    for(const product of cart){
        price = price + product.price;
        shipping = shipping + product.shipping;
        total = price+shipping;
    }
    const tax = total*10/100;
    const granTotal = total+tax;
    return (
        <div className='text-xl sticky top-0 bg-amber-500 p-5 rounded'>
            <h1 className='text-center'>Selected Items:{cart.length}</h1>
            <h3>Total Price:${price}</h3>
            <h3>Total Shipping Charge:${shipping}</h3>
            <h3>Tax:${tax}</h3>
            <h3>Grand Total:${granTotal}</h3>
        </div>
    );
};

export default SideCart;