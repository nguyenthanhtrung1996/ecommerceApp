import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20, 
        paddingVertical: 40,
        backgroundColor: 'white'
    },
    header:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    titleCart:{
        fontSize: 32, 
        fontWeight: '700'
    },
    iconCart:{
        justifyContent: 'flex-end'
    },
    TextNothing:{
        fontSize: 24, 
        opacity: 0.5
    },
    productCart:{
        flex: 1, 
        paddingTop: 20
    },
    
    productCartList:{
        flex: 1
    },
    productCartBox:{
        flexDirection: 'row', 
        marginBottom: 20
    },
    productCart_Image:{
        width: '50%', 
        height: 250,
        borderRadius: 15
    },
    productCart_InfoProduct:{
        flex: 1, 
        paddingHorizontal: 10,
        paddingBottom: 10, 
        justifyContent: 'space-between'
    },
    productCart_ButtonRemove:{
        textAlign: 'right'
    },
    productCart_NameProduct:{
        fontSize: 18, 
        fontWeight: '700'
    },
    productCart_CostProduct:{
        fontSize: 18, 
        fontWeight: '700', 
        opacity: 0.5
    },
    productCart_DecriptionProduct:{
        fontSize: 14, 
        fontWeight: '600'
    },
    productCart_SizeProductBox:{
        flexDirection:'row'
    },
    productCart_SizeProduct_Text:{
        textAlignVertical: 'center',
        fontSize: 16, 
        fontWeight: '700'
    },
    productCart_SizeProduct_ButtonSize:{
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal:10,
        borderRadius: 8,
        borderColor: '#e1e0e1',
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 2,
        backgroundColor: '#d8d8d8'
    },
    productCart_quantityBox:{
        flexDirection: 'row'
    },
    productCart_ButtonDecrease:{
        textAlignVertical: 'center'
    },
    productCart_quantity:{
        marginHorizontal: 12, 
        fontSize: 18
    },
    productCart_ButtonIncrease:{
        textAlignVertical: 'center'
    },
    productCart_TotalCost:{
        fontSize: 20, 
        fontWeight: '700'
    },
})