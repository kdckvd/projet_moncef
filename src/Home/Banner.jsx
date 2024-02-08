import React, { useState } from 'react';
import productData from '../products.json';
import { Link } from 'react-router-dom';
import Selectedcategory from '../components/Selectedcategory';

const title = (
  <h2>
    Recherchez vôtre produits parmi <span>des milliers</span> de produits
  </h2>
);
const desc = "Nous avons la plus grande collection de produits.";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form>
            <Selectedcategory select={"all"} />
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search your product'
              value={searchInput}
              onChange={handleSearch}
            />
            <button type='submit'>
              <i className='icofont-search'></i>
            </button>
          </form>

          <div>
            {searchInput &&
              filteredProducts.map((product) => (
                <Link key={product.id} to={`/shop/${product.id}`}>
                  <div className='d-flex gap-3 p-2'>
                    <div>
                      <div className='pro-thumb h-25'>
                        <img
                          src={product.img}
                          alt=''
                          width={70}
                          className='flex-grow-0'
                        />
                      </div>
                    </div>
                    

                    <div className='product-content'>
                      <p>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                      </p>
                     
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <p> {desc} </p>   
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
