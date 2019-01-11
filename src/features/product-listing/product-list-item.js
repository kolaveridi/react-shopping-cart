import React, { Component } from 'react';

export default class ProductListItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       const thisitemincart=this.props.cart.filter((item)=>item.id === this.props.product.id)[0];
       console.log('this.props',this.props.product);
       const{name,image,description,price}=this.props.product;
        return(
         <div className="product-list-item">
             <h3>{name}</h3>
          <img  
           height={100}
           title={name}
           src={`/products/${image}`} 
            > 
          </img>
          <div>{description}</div>
          <div> ${price} </div>
          <div>
          <button onClick={()=>this.props.addToCart(this.props.product)}>Add to cart({(thisitemincart && thisitemincart.quantity) || 0}) </button>
            </div>

             </div>


        );
    }
}