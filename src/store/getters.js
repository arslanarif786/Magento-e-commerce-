///// getters.js file bascially to get the values that we used in our system 
//// this file returns values and we used these values in our system where we need it.


export const cartItemCount = (state) => {
    return state.cart.length
  }
  
  export const cartTotalPrice = (state) => {
    let total = 0;
  
    state.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    })
  
    return total;
  }
  