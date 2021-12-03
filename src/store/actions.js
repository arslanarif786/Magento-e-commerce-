// in the file of actions.js, I have get the data of the products from the axios fetch method from the API

import axios from 'axios';

export const getProducts = ({commit}) => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
        commit('SET_PRODUCTS', response.data);
    })
   
}

export const getProduct = ( { commit} , productid ) => {
    axios.get(`https://fakestoreapi.com/products/${productid}`)
    .then(response => {
        commit('SET_PRODUCT', response.data);
    })
}


export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });
  
    axios.post("https://fakestoreapi.com/carts", {
      product_id: product.id,
      quantity,
    });
  };
  
  