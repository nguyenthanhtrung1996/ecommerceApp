// import axios from 'axios';
// import React, { useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch, useSelector } from 'react-redux';
// import { SetCart } from '../actions/cart';
// import { SetProduct } from '../actions/product';
// import HomeScreen from '../components/HomeScreen';

// function HomePage({ navigation }) {
//     const product = useSelector(state => state.product);
//     const cart = useSelector(state => state.cart);
//     const dispatch = useDispatch();

//     useEffect(async () => {
//         await axios.get('https://609279f885ff510017212e6a.mockapi.io/products')
//          .then( res => {
//             dispatch(SetProduct(res.data));
//           })
//           .catch( error => {
//                   console.error(error);
//         });
//     }, []);

    
//     useEffect(()=>{
//         getDataCart();
//     }, []);

//     useEffect(() => {
//         if(cart.length == 0){
//             removeDataCart();
//         } else{
//             setAsyncStorage(cart);
//         }
//     }, [cart]);

//     const getDataCart = async () => {
//         try {
//             const jsonValue = await AsyncStorage.getItem('CartList')
//             console.log('CartList json', JSON.parse(jsonValue));
//             if(jsonValue !== null){
//                 dispatch(SetCart(JSON.parse(jsonValue)))
//             }
//         } catch(error) {
//             console.log(error);
//         }
//       };
//     const removeDataCart = async () => {
//         try {
//             await AsyncStorage.removeItem('CartList');
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const setAsyncStorage = async (cart) => {
//         try {
//             await AsyncStorage.setItem(
//               'CartList',
//               JSON.stringify(cart),
//               () => {
//                   AsyncStorage.mergeItem(
//                   'CartList',
//                   JSON.stringify(cart),
//                   );
//               }
//             );
//           } catch (error) {
//               console.log(error);
//           }
//     };


//     return (
//         <HomeScreen navigation={navigation}/>
//     );
// }



// export default HomePage;