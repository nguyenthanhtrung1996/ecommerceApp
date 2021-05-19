import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseProduct, IncreaseProduct, RemoveProduct } from '../actions/cart';
import { stylesCartScreen } from './controller/style';


function CartScreen({ navigation }) {
    
    const product = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const getTotalCost = () => {
        let totalCost = 0;
        product.forEach(element => {
            totalCost += element.quantity * element.cost;
        });
        return totalCost;
    }

    return (
        <View style={stylesCartScreen.container}>
            <View style={stylesCartScreen.header}>
                <Text style={stylesCartScreen.titleCart}>Cart</Text>
                <View style={stylesCartScreen.iconCart}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Icon 
                            name='home' 
                            size={32} 
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {
                product.length == 0 ? 
                <View>
                    <Text style={stylesCartScreen.TextNothing}>Nothing....</Text>
                </View>
                :
                <View style={stylesCartScreen.productCart}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <View style={stylesCartScreen.productCartList}>
                            {
                                product.map((item, index) => {
                                    return(
                                        <View style={stylesCartScreen.productCartBox} key={index}>
                                            <Image 
                                                source={{uri: item.url}}
                                                style={stylesCartScreen.productCart_Image}
                                            />
                                            <View style={stylesCartScreen.productCart_InfoProduct}>
                                                <Icon 
                                                    name='close-circle-sharp' 
                                                    size={20} 
                                                    style={stylesCartScreen.productCart_ButtonRemove}
                                                    onPress={() => {
                                                        dispatch(RemoveProduct(index));
                                                        Alert.alert(`Notification`,`Remove ${item.name} success`);
                                                    }}
                                                />
                                                
                                                <Text style={stylesCartScreen.productCart_NameProduct}>{item.name}</Text>
                                                <Text style={stylesCartScreen.productCart_CostProduct}>{item.cost} $</Text>
                                                <Text style={stylesCartScreen.productCart_DecriptionProduct}>{item.decription}</Text>
                                                <View style={stylesCartScreen.productCart_SizeProductBox}>
                                                    <Text style={stylesCartScreen.productCart_SizeProduct_Text}>Size: </Text>
                                                    <Text style={stylesCartScreen.productCart_SizeProduct_ButtonSize}>{item.size}</Text>
                                                </View>
                                                <View style={stylesCartScreen.productCart_quantityBox}>
                                                    <Icon 
                                                        name='remove-circle'
                                                        color='black'
                                                        size={20}
                                                        style={stylesCartScreen.productCart_ButtonDecrease}
                                                        onPress={() => {
                                                            dispatch(DecreaseProduct(index));
                                                            Alert.alert(`Notification`, `Decrease ${item.name} success`);
                                                        }}
                                                    />
                                                    <Text style={stylesCartScreen.productCart_quantity}>{item.quantity}</Text>
                                                    <Icon 
                                                        name='add-circle'
                                                        color='black'
                                                        size={20}
                                                        style={stylesCartScreen.productCart_ButtonIncrease}
                                                        onPress={() => {
                                                            dispatch(IncreaseProduct(index));
                                                            Alert.alert(`Notification`, `Increase ${item.name} success`);
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    <View>
                        <Text style={stylesCartScreen.productCart_TotalCost}>Total: {getTotalCost()} $.</Text>
                    </View>
                </View>
            }
        </View>
    );
}

export default CartScreen;