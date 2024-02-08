import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults="Afficher 01 -  12 of 139 résultats"
import Data from '../products.json';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Searche from './Searche';
import ShopCategory from './ShopCategory';
import NosPack from './NosPack';


const Shop = () => {
  const[GridList,setGridList]=useState(true);
  const[products,setproducts]=useState(Data);
  console.log(products)



  const[currentPage,setCurrentPage]=useState(1);
  const productsPerPage=12;
  const indexOfLastProduct=currentPage*productsPerPage;
  const indexOfFirstProduct=indexOfLastProduct - productsPerPage;
  const currentProducts=products.slice(indexOfFirstProduct,indexOfLastProduct);

  const Paginate=(pageNumber) => {
      setCurrentPage(pageNumber)
  }
     
  const [selectedCategory,setSelectedCategory]=useState("ALL");
  const menuItems =[...new Set(Data.map((val)=>val.category))];
  const filterItem =(curcat) =>{ 
    const newItem=Data.filter((newVal) =>{
      return newVal.category===curcat;
    })
    setSelectedCategory(curcat);
    setproducts(newItem);
  }


  return (
    <div>



        <PageHeader  head="Notre Shop Page" cettepage="shop"  />
        <div className='shop-page padding-tb'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-12'>
                <article>
                  <div className='shop-title d-flex flex-warp justify-content-between'>
                    <p> {showResults} </p>
                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                       <a className='grid' onClick={() => setGridList(!GridList)}>
                       <i className='icofont-ghost'></i>
                        </a>
                        <a className='list' onClick={() => setGridList(!GridList)}>
                         <i className='icofont-listine-dots'></i>
                          </a>
                           </div>


                         </div>

                         <div>
                           <ProductCard GridList={GridList} products={ currentProducts}  />

                          </div>
                          <Pagination
                          productsPerPage={productsPerPage}
                          totalProducts={products.length}
                          Paginate={Paginate}
                          activePage={currentPage}
                          />
                          


                </article>
              </div>
              <div className='col-lg-4 col-12'>
                <aside>
                  <Searche products={products} GridList={GridList} />
                  <ShopCategory 
                  filterItem={filterItem}
                  setItem={setproducts}
                  menuItems={menuItems}
                  setproducts={setproducts}
                  selectedCategory={selectedCategory}
                   />
                   <NosPack/>



                </aside>
              </div>


            </div>

          </div>

        </div>



    </div>
  )
}

export default Shop