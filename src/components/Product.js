import React from 'react'
import './style.css';

const Product = ({ product }) => {

  const {name, price, id} = product

  const ProductSelected = (id) => {
    console.log('Comprando...' + id);
  }

  return ( 
    <div className='product-div'>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => {ProductSelected(id)}} className='btn-buy'>Comprar</button>
    </div>
   );
}
 
export default Product;