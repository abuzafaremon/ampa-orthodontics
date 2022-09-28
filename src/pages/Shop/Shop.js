import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  const category = [
    { name: "Men's Pants", id: 1 },
    { name: "t-Shirt", id: 2 },
    { name: "Cap", id: 3 }
  ]
  const size = [
    { name: "S", id: 1 },
    { name: "M", id: 2 },
    { name: "L", id: 3 }
  ]
  return (
    <section className='py-5'>
      <div className="container">
        {/* Filter Bar Start */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <select className="select select-bordered select-sm max-w-xs focus:outline-none">
              <option value="">--Category--</option>
              {
                category.map(cat => <option key={cat.id}>{cat.name}</option>)
              }
            </select>
            <select className="select select-bordered select-sm max-w-xs focus:outline-none">
              <option value="">--Size--</option>
              {
                size.map(s => <option key={s.id}>{s.name}</option>)
              }
            </select>
            <button className='btn btn-link btn-primary'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg><span>Reset</span>
            </button>
          </div>
          <div className="flex gap-2">
            <div className="form-control">
              <label className="input-group input-group-sm ">
                <span>Search</span>
                <input type="text" placeholder="Search..." className="input input-bordered input-sm focus:outline-none" />
              </label>
            </div>
            <button className='btn btn-primary btn-sm rounded-md'>Add To Cart</button>
          </div>
        </div>
        {/* Filter Bar End  */}
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th className='text-right'>Buy</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Shop