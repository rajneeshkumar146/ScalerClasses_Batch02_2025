import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 0,
        // Array of object -> [{Details of Product, Individual Quantity},.....]
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            const productToBeAdded = action.payload;
            if (productToBeAdded === undefined || productToBeAdded === null) {
                console.log("Add to cart is beign called without product. Something is fisy!");
                return;
            }

            state.cartQuantity++;
            const cartProductObjecIndex = state.cartProducts.findIndex((currentProduct) => currentProduct.id === productToBeAdded.id);

            if (cartProductObjecIndex != -1) {
                // Already present in cart just increase its individual quantity.
                let currentProductObject = state.cartProducts[cartProductObjecIndex];
                currentProductObject.individualQuantity++;
            } else {
                // Not present in cart.
                productToBeAdded.individualQuantity = 1;
                state.cartProducts.push(productToBeAdded);
            }
        },
        deleteFromCart: (state, action) => {
            const productToBeDeleted = action.payload;
            if (productToBeDeleted === undefined || productToBeDeleted === null) {
                console.log("Delete from cart is beign called without product. Something is fisy!");
                return;
            }

            const cartProductObjecIndex = state.cartProducts.findIndex((currentProduct) => currentProduct.id === productToBeDeleted.id);
            if (cartProductObjecIndex === -1) {
                console.log("Product which you are decide to delete from cart is not present in cart!");
                return;
            }

            state.cartQuantity--;
            let currentProductObject = state.cartProducts[cartProductObjecIndex];

            if (currentProductObject.individualQuantity === 1) {
                state.cartProducts.splice(cartProductObjecIndex, 1);
            } else {
                currentProductObject.individualQuantity--;
            }
        }
    }

});

export const actions = cartSlice.actions;
export default cartSlice;
