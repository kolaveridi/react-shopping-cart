import React, { Component } from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/products.json';
export default class Homepage extends React.Component{
     constructor(props){
         super(props);
     }
     render(){
         return(
            <div> 
            <h2>HomePage </h2>
               <ProductListing products={data.products} />
          </div>
         );

     }
}