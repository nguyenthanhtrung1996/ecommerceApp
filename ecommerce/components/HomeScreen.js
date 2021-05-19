import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from 'react-redux';
import { stylesHomeScreen } from './controller/style';
import IconCart from './IconCart';
import ProductScreen from './ProductScreen';

function HomeScreen({ navigation }) {

    const product = useSelector(state => state.product);
    const cart = useSelector(state => state.cart);

    const [ modalVisible, setModalVisible ] = useState(false);
    const [ nameProduct, setNameProduct ] = useState('1')
    const [ infoProduct, setInfoProduct ] = useState({});

    const [ quantity, setQuantity ] = useState(0);

    useEffect(() => {
        if(cart.length != 0){
            let count = 0;
            cart.forEach(element => {
                count += element.quantity;
            });
            setQuantity(count);
        } else {
            setQuantity(0);
        }
    }, [cart])

    const setVisible = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={{flex: 1}}>
            {
                product.length == 0 ? 
                <View style={stylesHomeScreen.spinner}>
                    <ActivityIndicator size='large' color="#0000ff"/>
                </View>
                :
                <View style={stylesHomeScreen.container}>
                    <ProductScreen visible={modalVisible} infoProduct={infoProduct} setVisible={setVisible}/>
                    <View style={stylesHomeScreen.header}>
                        <Text style={stylesHomeScreen.titleHomePage}>Home</Text>
                        <View style={stylesHomeScreen.iconCart}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Cart')}
                            >
                                <IconCart quantity={quantity}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={stylesHomeScreen.productMain}>
                        <View style={stylesHomeScreen.navbar}>
                            <TouchableOpacity 
                                style={nameProduct == '1' ? stylesHomeScreen.productButtonActive : stylesHomeScreen.productButton}
                                onPress={() => {setNameProduct('1')}}
                            >
                                    <Text style={stylesHomeScreen.titleProduct}>Coats</Text>
                                </TouchableOpacity>

                            <TouchableOpacity 
                                style={nameProduct == '2' ? stylesHomeScreen.productButtonActive : stylesHomeScreen.productButton}
                                onPress={() => {setNameProduct('2')}}
                            >
                                <Text style={stylesHomeScreen.titleProduct}>Dresses</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={nameProduct == '3' ? stylesHomeScreen.productButtonActive : stylesHomeScreen.productButton}
                                onPress={() => {setNameProduct('3')}}
                            >
                                <Text style={stylesHomeScreen.titleProduct}>Jersey</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={nameProduct == '4' ? stylesHomeScreen.productButtonActive : stylesHomeScreen.productButton}
                                onPress={() => {setNameProduct('4')}}
                            >
                                <Text style={stylesHomeScreen.titleProduct}>Pants</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={stylesHomeScreen.productMainBox}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                product[nameProduct-1].products.map((product,index) => {
                                    return(
                                        <View 
                                            style={stylesHomeScreen.productMainList}
                                            key={index}
                                        >
                                            <View style={stylesHomeScreen.productMain_ImageBox}>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setInfoProduct(product);
                                                        setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Image 
                                                        source={{uri: product.url}}
                                                        style={stylesHomeScreen.productMain_ImageProduct}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={stylesHomeScreen.productMain_Content}>
                                                <Text style={stylesHomeScreen.productMain_NameProduct}>{product.name}</Text>
                                                <Text style={stylesHomeScreen.productMain_CostProduct}>{product.cost} $</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            </ScrollView>
                        </View>
                    </View>
                    
                    <View style={stylesHomeScreen.productMore}>
                        <Text style={stylesHomeScreen.productMore_title}>Recommend for You</Text>
                        <View style={stylesHomeScreen.productMoreBox}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                product.length == 0 ? 
                                <View>
                                    <Text>Loadding.....</Text>
                                </View>
                                :
                                product[product.length-1].products.map((product, index) => {
                                    return (
                                        <View 
                                            style={stylesHomeScreen.productMoreList}
                                            key={index}
                                        >
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        console.log('touch: ', product);
                                                        setInfoProduct(product);
                                                        setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Image 
                                                        source={{uri: product.url}}
                                                        style={stylesHomeScreen.productMore_ImageProduct}
                                                    />
                                                </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                            </ScrollView>
                        </View>
                    </View>
                </View>
            }
        </View>
    );
}

export default HomeScreen;