import { StyleSheet } from "react-native";

export default StyleSheet.create({
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