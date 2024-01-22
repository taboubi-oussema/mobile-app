import{Text,View,Image,TouchableOpacity} from "react-native";

import stylesGlobal from './styles/style';

export default function Notifications(){
    return(
        <View style={{alignItems:'center',marginHorizontal:12}}>
            <Image style={{width:350 ,height:420,marginTop:'5%'}} source={require('../assets/image/image_5-removebg-preview.png')}></Image>
            <Text style={{fontWeight:'400',fontSize:36,lineHeight:54,textAlign:'center'}}>Notifications</Text>
            <Text style={{fontWeight:'400',fontSize:18,lineHeight:27,textAlign:'center',color:'#5B5555',marginBottom:50}}>Stay updated about new courses , restaurants and other more ...</Text>
            {/* Button */}

            <TouchableOpacity  style={[stylesGlobal.ViewButton,{backgroundColor:'#EBB22F',marginTop:'3%',alignItems:'center',}]}>
                <Text style={{fontWeight:'500',fontSize:18,lineHeight:27,textAlign:'center',}}>Allow</Text>
            </TouchableOpacity>


        </View>
    );
}