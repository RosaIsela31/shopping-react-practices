import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  // Creating product list
  const [products, setProducts] = useState([
    {id: 1, name: 'falda', price: 50},
    {id: 2, name: 'vestido', price: 120},
    {id: 3, name: 'zapatillas', price: 80},
    {id: 4, name: 'pantalón', price: 100}
  ]);

  const year = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        title='Tienda virtual'
      />
      <Footer
        date={year} 
      />
    </Fragment>
  );
}

export default App;
