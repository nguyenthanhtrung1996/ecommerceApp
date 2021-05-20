import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseProduct, IncreaseProduct, RemoveProduct } from '../../actions/cart';
import style from './controller/style';


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
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.titleCart}>Cart</Text>
                <View style={style.iconCart}>
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
                    <Text style={style.TextNothing}>Nothing....</Text>
                </View>
                :
                <View style={style.productCart}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <View style={style.productCartList}>
                            {
                                product.map((item, index) => {
                                    return(
                                        <View style={style.productCartBox} key={index}>
                                            <Image 
                                                source={{uri: item.url}}
                                                style={style.productCart_Image}
                                            />
                                            <View style={style.productCart_InfoProduct}>
                                                <Icon 
                                                    name='close-circle-sharp' 
                                                    size={20} 
                                                    style={style.productCart_ButtonRemove}
                                                    onPress={() => {
                                                        dispatch(RemoveProduct(index));
                                                        Alert.alert(`Notification`,`Remove ${item.name} success`);
                                                    }}
                                                />
                                                
                                                <Text style={style.productCart_NameProduct}>{item.name}</Text>
                                                <Text style={style.productCart_CostProduct}>{item.cost} $</Text>
                                                <Text style={style.productCart_DecriptionProduct}>{item.decription}</Text>
                                                <View style={style.productCart_SizeProductBox}>
                                                    <Text style={style.productCart_SizeProduct_Text}>Size: </Text>
                                                    <Text style={style.productCart_SizeProduct_ButtonSize}>{item.size}</Text>
                                                </View>
                                                <View style={style.productCart_quantityBox}>
                                                    <Icon 
                                                        name='remove-circle'
                                                        color='black'
                                                        size={20}
                                                        style={style.productCart_ButtonDecrease}
                                                        onPress={() => {
                                                            dispatch(DecreaseProduct(index));
                                                            Alert.alert(`Notification`, `Decrease ${item.name} success`);
                                                        }}
                                                    />
                                                    <Text style={style.productCart_quantity}>{item.quantity}</Text>
                                                    <Icon 
                                                        name='add-circle'
                                                        color='black'
                                                        size={20}
                                                        style={style.productCart_ButtonIncrease}
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
                        <Text style={style.productCart_TotalCost}>Total: {getTotalCost()} $.</Text>
                    </View>
                </View>
            }
        </View>
    );
}

export default CartScreen;