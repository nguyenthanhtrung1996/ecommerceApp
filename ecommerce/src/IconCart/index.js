import React from "react";
import { View } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import style from "./controller/style";

function IconCart({ quantity }) {
    return (
      <View style={style.container}>
          <Icon type="ionicon" name="cart" size={32}/>
          <Badge value={quantity} status="error" containerStyle={style.badge}/>
      </View>
    );
}

export default IconCart;
