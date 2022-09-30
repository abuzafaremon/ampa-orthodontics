import React, { useEffect, useState } from 'react';
import './Shop.css';
import SingleProduct from './SingleProduct';
import useProducts from '../../hooks/useProducts';
import FilterBar from '../../components/Header/FilterBar';

function Shop() {
  const [products, setProducts] = useProducts();
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {

        const searchMatch = data.filter(d => d.name.includes(searchText.toLowerCase()) || d.category.includes(searchText.toLowerCase()));
        setProducts(searchMatch);
      })
  }, [searchText]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        const sizeMatch = data.filter(d => d.size === size);
        if (size !== '' || null || undefined) {
          setProducts(sizeMatch);
        }
      })
  }, [size]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        const catMatch = data.filter(d => d.category === category)
        if (category !== '' || null || undefined) {
          setProducts(catMatch);
        }
      })
  }, [category]);

  const handleCatChange = event => {
    // console.log(event.target.value);
    setCategory(event.target.value);
    // console.log(category);
  }

  const handleSizeChange = event => {
    // console.log(event.target.value);
    setSize(event.target.value);
    // console.log(size);
  }

  const handleReset = event => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }


  const handleSearchChange = event => {
    setSearchText(event.target.value);
  }

  return (
    <section className='py-5'>
      <div className="container">
        {/* Filter Bar Start */}
        <FilterBar
          handleSearchChange={handleSearchChange}
          handleCatChange={handleCatChange}
          handleSizeChange={handleSizeChange}
          handleReset={handleReset}
        ></FilterBar>
        {/* Filter Bar End  */}
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>
                Category
              </th>
              <th>Size</th>
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