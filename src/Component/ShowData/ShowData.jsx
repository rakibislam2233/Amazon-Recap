import React from 'react';

const ShowData = ({product,handelClick}) => {
    const {id,name,img,price} = product;

    return (
        <div className=''>
        <div className="card w-full h-full bg-base-100 shadow-xl ">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price:{price}</p>
          <div className="w-full">
            <button onClick={()=>handelClick(product)} className="btn w-full btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default ShowData;