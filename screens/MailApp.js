import{Text,View,Image,TouchableOpacity} from "react-native";

import stylesGlobal from './styles/style';

export default function MailApp(){
    return(
        <View style={{alignItems:'center',marginHorizontal:12,}}>
            <Image style={{width:350 ,height:400,marginTop:'15%'}} source={require('../assets/image/photo-removebg-preview.png')}></Image>
            <Text style={{fontWeight:'400',fontSize:36,lineHeight:54,textAlign:'center'}}>Check Your Mail</Text>
            <Text style={{fontWeight:'400',fontSize:18,lineHeight:27,textAlign:'center',color:'#5B5555',marginBottom:'5%'}}>We have sent a password  recover {'\n'}instructions to your mail</Text>
            {/* Button */}


            <TouchableOpacity  style={[stylesGlobal.ViewButton,{backgroundColor:'#EBB22F',marginBottom:'6%',marginTop:'3%',alignItems:'center',}]}>
                <Text style={{fontWeight:'500',fontSize:18,lineHeight:27,textAlign:'center',}}>Open Mail App</Text>
            </TouchableOpacity>


            <Text style={{fontWeight:'500',fontSize:18,lineHeight:27,textAlign:"center",paddingBottom:19}}>Skip, I’ll try later</Text>
            <Text style={{fontWeight:'400',fontSize:18,lineHeight:27,textAlign:'center',color:'#5B5555'}}>Didn’t receive the email ? Check the spam{'\n'} folder or <Text style={{fontWeight:'600',fontSize:18,lineHeight:27,textAlign:'center',color:'#000000'}}> try another email address</Text></Text>
        </View>
    );
}