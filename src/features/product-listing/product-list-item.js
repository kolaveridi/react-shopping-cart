import React, { Component } from 'react';

export default class ProductListItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       console.log('this.props',this.props.product);
       const{name,image,description,price}=this.props.product;
        return(
         <div>
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
          <button>Add to cart </button>
            </div>

             </div>


        );
    }
}