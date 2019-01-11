import React, { Component } from 'react';
import ProductListItem from './product-list-item';

import {connect} from 'react-redux';
import { cartItemsWithQuantities } from '../cart';
class ProductListing extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //console.log('data',this.props.products);
        return(
            <div className="product-listing">
                {
                    this.props &&  this.props.products && this.props .products .map((product)=>(
                        <ProductListItem 
                          cart={this.props.cart}
                          product ={product}
                          addToCart={this.props.addToCart}
                          cart={cartItemsWithQuantities(this.props.cart)}
                          />
                    ))
                }
             </div>

              );
    }
}


function mapStateToProps(state){
    return{
        cart:state.cart
    }
}
function mapDispatchToProps(dispatch){
   return{
      addToCart:(item)=>{
          console.log('jesus',item);
          dispatch({type:'ADD',payload:item})
      },
      removeFromCart:(item)=>{
          dispatch({type:'REMOVE',payload:item})
      }

   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing);