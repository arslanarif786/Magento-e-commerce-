////  this file basically updates or changes or iterate any change in the actions.js file
////  basically it mutates the actions that means show some change in the actions and then this mutation updates the state

export const SET_PRODUCTS = (state, products) => {
     state.products = products;
 
    }
 export const SET_PRODUCT = (state, product) => {
     state.product = product;
 }


export const ADD_TO_CART = (state, { product, quantity }) => {
    let productInCart = state.cart.find((item) => {
      return item.product.id === product.id;
    });
    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }
    state.cart.push({
      product,
      quantity
    })
  };
