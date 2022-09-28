import React from 'react';
import './Shop.css';
import { useEffect, useState } from 'react';

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <section>
      <div className="container">
        <h2>Products:{products.length}</h2>
        {
          products.map(p => <li><img width={50} src={p.img} alt="" /></li>)
        }
      </div>
    </section>
  );
}

export default Shop