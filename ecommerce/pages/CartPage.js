import React from 'react';
import { useSelector } from 'react-redux';
import CartScreen from '../components/CartScreen';



function CartPage({ navigation }) {
    const product = useSelector(state => state.cart);

    const getTotalCost = () => {
        let totalCost = 0;
        product.forEach(element => {
            totalCost += element.quantity * element.cost;
        });
        return totalCost;
    }

    return (
        <CartScreen navigation={navigation} getTotalCost={getTotalCost}/>
    );
}

export default CartPage;