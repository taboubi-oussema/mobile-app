import{Text,View,Image,TextInput,TouchableOpacity,ScrollView} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import stylesGlobal from './styles/style';

export default function ResetPass(){
    return(
        <View style={{marginHorizontal:12,marginTop:'15%'}}>
            <Text style={{textAlign:'center',paddingBottom:'8%'}}>Enter new password and confirm</Text>

            <View style={[stylesGlobal.ViewButton,{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',}]}>
                <MaterialIcons name="lock-outline" size={24} color="black" style={{marginHorizontal:15}}/>
                <TextInput style={stylesGlobal.TextInputStyle} placeholder="Password" secureTextEntry />
            </View>

            <View style={[stylesGlobal.ViewButton,{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',}]}>
                <MaterialIcons name="lock-outline" size={24} color="black" style={{marginHorizontal:15}}/>
                <TextInput style={stylesGlobal.TextInputStyle} placeholder="Confirm Password" secureTextEntry />
            </View>



            <TouchableOpacity  style={[stylesGlobal.ViewButton,{backgroundColor:'#EBB22F',marginBottom:'6%',marginTop:'3%',alignItems:'center',}]}>
                <Text style={{fontWeight:'500',fontSize:18,lineHeight:27,textAlign:'center',}}>Change Password</Text>
            </TouchableOpacity>

        </View>
    );
}