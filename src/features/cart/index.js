import React, { Component } from 'react';
import {connect} from 'react-redux';

export const cartItemsWithQuantities = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      const filteredItem = acc.filter(i2 => i2.id === item.id)[0]
      filteredItem !== undefined
        ? filteredItem.quantity ++
        : acc.push({ ...item, quantity: 1 })
      return acc
    }, [])
  }