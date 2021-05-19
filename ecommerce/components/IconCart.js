import React from "react";
import { View } from 'react-native';
import { Badge, Icon } from 'react-native-elements';

function IconCart({ quantity }) {
    return (
      <View style={{alignItems: 'flex-end'}}>
          <Icon type="ionicon" name="cart" size={32}/>
          <Badge value={quantity} status="error" containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
      </View>
    );
}

export default IconCart;
