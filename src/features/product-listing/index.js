import React, { Component } from 'react';
import ProductListItem from './product-list-item';


export default class ProductListing extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //console.log('data',this.props.products);
        return(
            <div>
                {
                    this.props &&  this.props.products && this.props .products .map((product)=>(
                        <ProductListItem product ={product}/>
                    ))
                }
             </div>

              );
    }
}