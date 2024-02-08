import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, Paginate, activePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='default-pagination lab-ul'>
      <li>
        <a href='#' onClick={()=>{
          if (activePage<pageNumbers.length){
            Paginate(activePage-1)
          }
        } }>
          <i className='icofont-rounded-left'></i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
          <button onClick={() => Paginate(number)} className='bg-transparent'>
            {number}
          </button>
        </li>
      ))}
      <li>
        <a href='#' onClick={()=>{
          if (activePage<pageNumbers.length){
            Paginate(activePage+1)
          }
        } }>
          <i className='icofont-rounded-right'></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
