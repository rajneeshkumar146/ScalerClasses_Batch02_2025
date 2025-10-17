import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import basicOps from '../utility/basicOps';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Categories from '../components/Categories';
import { usePaginationContext } from '../contexts/PaginationContext';
import ProductList from '../components/ProductList';

const ASCENDING_ORDER_SORTING = 1;
const DESENDING_ORDER_SORTING = -1;
const ALL_CATEGORY = "All Categories";

function Home() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState(0);
  const [currCategory, setCurrCategory] = useState(ALL_CATEGORY);

  const { pageSize, pageNum, setPageSize, setPageNum } = usePaginationContext();


  /********************Getting all the Products *****************/
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      setProducts(productData);
    })();
  }, []);

  /********************Getting all the categories *****************/
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const categorieData = await response.json();

      // setCategories([ALL_CATEGORY, ...categorieData]);
      setCategories(categorieData);
    })();
  }, []);

  let object = basicOps(products, searchTerm, sortDirection, currCategory, pageNum, pageSize);
  let modifiedArrayOfProducts = object.modifiedArray != null ? object.modifiedArray : [];
  let totalPages = object.totalPages;

  return (
    <>
      <header className='nav_wrapper'>
        <div className='search_sortWrapper'>
          <input className='search_input' type="text" value={searchTerm} onChange={(event) => {
            setSearchTerm(event.target.value);
            setPageNum(1);
          }}></input>

          <div className='icon_container'>
            <ArrowCircleUpIcon style={{ color: "white" }} fontSize="large" onClick={() => {
              setSortDirection(ASCENDING_ORDER_SORTING);
              setPageNum(1);
            }} />

            <ArrowCircleDownIcon style={{ color: "white" }} fontSize="large" onClick={() => {
              setSortDirection(DESENDING_ORDER_SORTING);
              setPageNum(1);
            }} />
          </div>
        </div>

        <div className='categories_wrapper'>
          <Categories
            categories={categories}
            setCurrCategory={setCurrCategory}
          />
        </div>
      </header>

      <main className='product_wrapper'>
        <ProductList productList={modifiedArrayOfProducts}></ProductList>
      </main>

      <div className='pagination'>
        <button
          onClick={() => {
            if (pageNum === 1) {
              return;
            }
            setPageNum(pageNum - 1);
          }}
          disabled={pageNum === 1}
        >
          <KeyboardArrowLeftIcon fontSize='large'></KeyboardArrowLeftIcon>
        </button>

        <div className='pageNum'>{pageNum}</div>

        <button
          onClick={() => {
            if (pageNum === totalPages) {
              return;
            }
            setPageNum(pageNum + 1);
          }}
          disabled={pageNum === totalPages}
        >
          <KeyboardArrowRightIcon fontSize='large'></KeyboardArrowRightIcon>
        </button>
      </div>
    </>
  )
}

export default Home