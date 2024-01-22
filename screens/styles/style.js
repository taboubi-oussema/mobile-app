import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ViewButton: {
        justifyContent:'center',
        marginBottom:'3%',
        width:'100%',
        height:53,
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:30, 
        
    },
    TextInputStyle:{
        fontWeight:'400',
        fontSize:18,
        lineHeight:27,
        
    },
    DirectionImage:{
        flexDirection:'row',
        alignItems:'center',
    },
    imagesBorder:{
        borderColor:'black',
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:7,
        padding:8,
        
    },
    InputBorderStyle:{
        borderColor:'black',
        borderWidth:2,
        
        textAlign:'center',
        borderRadius:35,
        width:70,
        height:70
    }

    

});
export default styles;