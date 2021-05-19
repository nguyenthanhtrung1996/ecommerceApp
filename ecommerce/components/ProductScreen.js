import React, { useState } from 'react';
import { Alert, ImageBackground, Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../actions/cart';
import { stylesProductScreen } from './controller/style';

function ProductScreen({visible, infoProduct, setVisible}) {
    const dispatch = useDispatch();
    const [ buttonActive, setButtonActive ] = useState('S');

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={stylesProductScreen.modalView}>
                    <ImageBackground  
                        source={{uri: infoProduct.url}}
                        style={stylesProductScreen.ImageBackground}
                    >
                        <View style={stylesProductScreen.container}>
                            <Icon 
                                name='chevron-back-sharp' 
                                size={32} 
                                color='black'
                                onPress={setVisible}
                            />
                            
                                <View 
                                    style={stylesProductScreen.infoProductBox}
                                    onStartShouldSetResponder={() => {
                                        console.log('clicked');
                                        _start();
                                    }}
                                >
                                    <View>
                                        <Text style={stylesProductScreen.infoProduct_Name}>{infoProduct.name}</Text>
                                        <Text style={stylesProductScreen.infoProduct_Cost}>$ {infoProduct.cost}</Text>
                                        <Text style={stylesProductScreen.infoProduct_TextSize}>Your Size</Text>
                                        <View style={stylesProductScreen.infoProduct_ButtonSizeBox}>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('S')}
                                            >
                                                <View style={buttonActive == 'S' ? stylesProductScreen.buttonActiveSize : stylesProductScreen.buttonSize}>
                                                        <Text style={stylesProductScreen.buttonText}>S</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('M')}
                                            >
                                                <View style={buttonActive == 'M' ? stylesProductScreen.buttonActiveSize : stylesProductScreen.buttonSize}>
                                                        <Text style={stylesProductScreen.buttonText}>M</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('L')}
                                            >
                                                <View style={buttonActive == 'L' ? stylesProductScreen.buttonActiveSize : stylesProductScreen.buttonSize}>
                                                        <Text style={stylesProductScreen.buttonText}>L</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('XL')}
                                            >
                                                <View style={buttonActive == 'XL' ? stylesProductScreen.buttonActiveSize : stylesProductScreen.buttonSize}>
                                                        <Text style={stylesProductScreen.buttonText}>XL</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={stylesProductScreen.infoProduct_TitleDecription}>Composition</Text>
                                            <Text style={stylesProductScreen.infoProduct_TitleDecription}>Country</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={stylesProductScreen.infoProduct_ContentDecription}>{infoProduct.composition}</Text>
                                            <Text style={stylesProductScreen.infoProduct_ContentDecription}>{infoProduct.country}</Text>
                                        </View>
                                        <View>
                                            <Text style={stylesProductScreen.infoProduct_TitleDecription}>Care</Text>
                                        </View>
                                        <View>
                                            <Text style={stylesProductScreen.infoProduct_ContentDecription}>{infoProduct.decription}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(AddProduct(infoProduct, buttonActive));
                                            setVisible();
                                            Alert.alert(`Notification`,`Add ${infoProduct.name} success`);
                                        }}
                                    >
                                        <View style={stylesProductScreen.buttonAdd}>
                                            <Text style={stylesProductScreen.buttonAddText}>Add To Cart</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </ImageBackground>
                </View>
            </Modal>
        </View>
    );
}

export default ProductScreen;