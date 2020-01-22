import React from 'react'
import './style.css';

const Product = ({ product, car, setCar, products }) => {

  const {name, price, id} = product

  const ProductSelected = (id) => {
    const items = products.filter(item => item.id === id);
    setCar([
      ...car,
      ...items
    ]);
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