import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from 'react-redux';
import style from './controller/style';
import ProductScreen from '../Product/ProductScreen';
import IconCart from '../IconCart/index'

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
                <View style={style.spinner}>
                    <ActivityIndicator size='large' color="#0000ff"/>
                </View>
                :
                <View style={style.container}>
                    <ProductScreen visible={modalVisible} infoProduct={infoProduct} setVisible={setVisible}/>
                    <View style={style.header}>
                        <Text style={style.titleHomePage}>Home</Text>
                        <View style={style.iconCart}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Cart')}
                            >
                                <IconCart quantity={quantity}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.productMain}>
                        <View style={style.navbar}>
                            <TouchableOpacity 
                                style={nameProduct == '1' ? style.productButtonActive : style.productButton}
                                onPress={() => {setNameProduct('1')}}
                            >
                                    <Text style={style.titleProduct}>Coats</Text>
                                </TouchableOpacity>

                            <TouchableOpacity 
                                style={nameProduct == '2' ? style.productButtonActive : style.productButton}
                                onPress={() => {setNameProduct('2')}}
                            >
                                <Text style={style.titleProduct}>Dresses</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={nameProduct == '3' ? style.productButtonActive : style.productButton}
                                onPress={() => {setNameProduct('3')}}
                            >
                                <Text style={style.titleProduct}>Jersey</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={nameProduct == '4' ? style.productButtonActive : style.productButton}
                                onPress={() => {setNameProduct('4')}}
                            >
                                <Text style={style.titleProduct}>Pants</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={style.productMainBox}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                product[nameProduct-1].products.map((product,index) => {
                                    return(
                                        <View 
                                            style={style.productMainList}
                                            key={index}
                                        >
                                            <View style={style.productMain_ImageBox}>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setInfoProduct(product);
                                                        setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <Image 
                                                        source={{uri: product.url}}
                                                        style={style.productMain_ImageProduct}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={style.productMain_Content}>
                                                <Text style={style.productMain_NameProduct}>{product.name}</Text>
                                                <Text style={style.productMain_CostProduct}>{product.cost} $</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            </ScrollView>
                        </View>
                    </View>
                    
                    <View style={style.productMore}>
                        <Text style={style.productMore_title}>Recommend for You</Text>
                        <View style={style.productMoreBox}>
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
                                            style={style.productMoreList}
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
                                                        style={style.productMore_ImageProduct}
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