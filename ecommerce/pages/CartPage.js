import React from 'react';
import { useSelector } from 'react-redux';
import CartScreen from '../components/CartScreen';



function CartPage({ navigation }) {

    return (
        <CartScreen navigation={navigation}/>
    );
}

export default CartPage;