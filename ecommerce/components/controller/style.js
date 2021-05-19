import { StyleSheet } from "react-native";

export const stylesHomeScreen = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20, 
        paddingVertical: 40,
        backgroundColor: 'white'
    },
    spinner:{
        flex: 1,
        justifyContent: "center"
    },
    header:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    titleHomePage:{
        fontSize: 32, 
        fontWeight: '700'
    },
    iconCart: {
        justifyContent: 'flex-end'
    },
    productMain: {
        flex: 2,
        paddingVertical: 20
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    productButtonActive: {
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        backgroundColor: '#fbe1e3', 
        borderRadius: 20
    },
    productButton: {
        paddingHorizontal: 15, 
        paddingVertical: 10,
        borderRadius: 20
    },
    titleProduct:{
        fontSize: 16, 
        fontWeight: '700'
    },
    productMainBox:{
        flex: 1
    },
    productMainList:{
        width: 200, 
        borderRadius: 15, 
        justifyContent: 'space-evenly', 
        marginRight: 20
    },
    productMain_ImageBox:{
        width: '100%', 
        height: '85%'
    },
    productMain_ImageProduct:{ 
        width: '100%', 
        height: '100%', 
        borderRadius: 15
    },
    productMain_Content:{
        flexDirection:'row', 
        justifyContent: 'space-between'
    },
    productMain_NameProduct:{
        fontSize: 18, 
        fontWeight: '700'
    },
    productMain_CostProduct:{
        fontSize: 18, 
        fontWeight: '700', 
        opacity: 0.5
    },
    productMore:{
        flex: 1.2
    },
    productMore_title:{
        fontSize: 18, 
        fontWeight: '700', 
        marginBottom: 20
    },
    productMoreBox:{
        flex: 1
    },
    productMoreList:{
        width: 150, 
        borderRadius: 15, 
        justifyContent: 'space-around', 
        marginRight: 15
    },
    productMore_ImageProduct:{ 
        width: '100%', 
        height: '100%', 
        borderRadius: 15
    },
});

export const stylesCartScreen = StyleSheet.create({
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

export const stylesProductScreen = StyleSheet.create({
    modalView:{
        height: '100%'
    },
    ImageBackground:{ 
        width: '100%', 
        height: '100%'
    },
    container:{
        height: '100%',
        justifyContent: 'space-between'
    },
    infoProductBox:{
        height: '60%', 
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white', 
        elevation: 30, 

        paddingHorizontal: 30, 
        paddingVertical: 30,
        
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50
    },
    infoProduct_Name:{
        fontSize: 32, 
        fontWeight: '700'
    },
    infoProduct_Cost:{
        fontSize: 28, 
        fontWeight: '700',
        marginBottom: 10,
        opacity: 0.5
    },
    infoProduct_TextSize:{
        fontSize: 16, 
        fontWeight: '700',
        marginBottom: 10
    },
    infoProduct_ButtonSizeBox:{
        flexDirection: 'row',
        marginBottom: 20
    },
    buttonSize:{
        paddingVertical: 5,
        paddingHorizontal:10,
        borderRadius: 8,
        borderColor: '#e1e0e1',
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 2,
        marginRight: 10,
    },
    buttonActiveSize:{
        paddingVertical: 5,
        paddingHorizontal:10,
        borderRadius: 8,
        borderColor: '#e1e0e1',
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 2,
        marginRight: 10,
        backgroundColor: '#d8d8d8'
    },
    buttonText:{
        fontSize: 16
    },
    buttonAdd:{
        backgroundColor:'#3b3a3b', 
        borderRadius: 30, 
        paddingVertical: 10
    },
    buttonAddText:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    infoProduct_TitleDecription:{
        fontSize: 16, 
        fontWeight: '700',
    },
    infoProduct_ContentDecription:{
        fontSize: 16,
        opacity: 0.5, 
        marginBottom: 10
    },
})