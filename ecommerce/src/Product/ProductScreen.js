import React, { useState } from 'react';
import { Alert, ImageBackground, Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../../actions/cart';
import style from './controller/style';

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
                <View style={style.modalView}>
                    <ImageBackground  
                        source={{uri: infoProduct.url}}
                        style={style.ImageBackground}
                    >
                        <View style={style.container}>
                            <Icon 
                                name='chevron-back-sharp' 
                                size={32} 
                                color='black'
                                onPress={setVisible}
                            />
                            
                                <View 
                                    style={style.infoProductBox}
                                >
                                    <View>
                                        <Text style={style.infoProduct_Name}>{infoProduct.name}</Text>
                                        <Text style={style.infoProduct_Cost}>$ {infoProduct.cost}</Text>
                                        <Text style={style.infoProduct_TextSize}>Your Size</Text>
                                        <View style={style.infoProduct_ButtonSizeBox}>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('S')}
                                            >
                                                <View style={buttonActive == 'S' ? style.buttonActiveSize : style.buttonSize}>
                                                        <Text style={style.buttonText}>S</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('M')}
                                            >
                                                <View style={buttonActive == 'M' ? style.buttonActiveSize : style.buttonSize}>
                                                        <Text style={style.buttonText}>M</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('L')}
                                            >
                                                <View style={buttonActive == 'L' ? style.buttonActiveSize : style.buttonSize}>
                                                        <Text style={style.buttonText}>L</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => setButtonActive('XL')}
                                            >
                                                <View style={buttonActive == 'XL' ? style.buttonActiveSize : style.buttonSize}>
                                                        <Text style={style.buttonText}>XL</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={style.infoProduct_TitleDecription}>Composition</Text>
                                            <Text style={style.infoProduct_TitleDecription}>Country</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={style.infoProduct_ContentDecription}>{infoProduct.composition}</Text>
                                            <Text style={style.infoProduct_ContentDecription}>{infoProduct.country}</Text>
                                        </View>
                                        <View>
                                            <Text style={style.infoProduct_TitleDecription}>Care</Text>
                                        </View>
                                        <View>
                                            <Text style={style.infoProduct_ContentDecription}>{infoProduct.decription}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(AddProduct(infoProduct, buttonActive));
                                            setVisible();
                                            Alert.alert(`Notification`,`Add ${infoProduct.name} success`);
                                        }}
                                    >
                                        <View style={style.buttonAdd}>
                                            <Text style={style.buttonAddText}>Add To Cart</Text>
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