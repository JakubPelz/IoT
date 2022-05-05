import React, { useState } from 'react'
import ProductsComponent from '../components/productsComponents/ProductsComponent'
import data from '../components/productsComponents/Data'
import Baskets from '../components/productsComponents/Baskets';

const Products = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  return (
    <div className='ui vertical mashead segment' style={{ marginTop: "50px" }}>
      <div className='ui center aligned container'>
        <div className="ui vertical left aligned footer segment">
          <ProductsComponent onAdd={onAdd} products={products} />
        </div> <div className="ui vertical left aligned footer segment">
          <Baskets onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
        </div>
      </div>
      <div style={{ width: '500px' }}></div>
    </div >
  )
}

export default Products