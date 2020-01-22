import React from 'react'
import './style.css';

const Product = ({ product, car, setCar, products }) => {

  const ProductSelected = (id) => {
    const items = products.filter(item => item.id === id)[0];
    setCar([
      ...car,
      items
    ]);
  }

  const ProductDeleted = (id) => {
    const items = car.filter(item => item.id !== id);
    setCar(items)
  }

  const {name, price, id} = product;

  return ( 
    <div className='product-div'>
      <h3>{name}</h3>
      <p>${price}</p>

      {
        products
        ?
        ( 
          <button onClick={() => {ProductSelected(id)}} className='btn-buy'>Comprar</button>
        )
        :
        (
          <button onClick={() => {ProductDeleted(id)}} className='btn-buy'>Eliminar</button>
        )
      }
    </div>
   );
}
 
export default Product;