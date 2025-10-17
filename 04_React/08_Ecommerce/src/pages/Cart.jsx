import React from 'react'
import ProductList from "../components/ProductList";
import {useSelector} from "react-redux";

function Cart() {
    const cartProductList = useSelector((store) => store.cartReducer.cartProducts);

    return (
        <>
            <h2>Welcome to cart section!</h2>
            <div className=''>
                <ProductList productList={cartProductList}></ProductList>
                
            </div>
        </>
    )
}

export default Cart
