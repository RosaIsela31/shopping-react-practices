import React from 'react'
import Product from './Product'
import './style.css'

const Car = ({ car, setCar }) => {
  return ( 
    <div className='car'>
      <h2>Tu carrito de compras</h2>
      {
        car.length === 0
        ?
          <p>No hay elementos en el carrito</p>
        :
          car.map(item => (
            <Product 
              key={item.id}
              product={item}
              car={car}
              setCar={setCar}
            />
          ))
      }
      
    </div>
   );
}
 
export default Car;