import { StyleSheet } from "react-native";

export default StyleSheet.create({
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