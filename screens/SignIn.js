import React from "react";
import{Text,TextInput, View,TouchableOpacity,Image} from 'react-native'
import stylesGlobal from './styles/style';


export default function SignIn({navigation}){
    return(
        <View >
        
            {/* Logo style */}

            <View style={{
                height:'40%',
                justifyContent:'center',
                alignItems:'center',}}>

                <Image style={{
                    width:124,
                    height:150,
                    marginTop:'3%'}}
                    source={require("../assets/image/logo.png")}></Image>
                
                <Text style={{        
                    fontWeight:'400',
                    fontSize:36,
                    lineHeight:54,
                    textAlign:'center',}}
                >Sign In</Text>
            
            </View>

            

            <View style={{marginHorizontal:12}}> 

                {/*mobile number  Button style  */}

                <View style={stylesGlobal.ViewButton}>
                    <View style={{flexDirection:'row', alignItems:'center', }}>

                        <Image  source={require("../assets/image/tel.png")} style={{
                            marginRight:'7%',
                            width:35,
                            height:40,
                            marginHorizontal:'15%'
                        }}></Image>
                            <TextInput keyboardType='numeric'  placeholder="Enter mobile number" style={stylesGlobal.TextInputStyle}/>
                    </View>
                    
                </View>

                {/*Password  Button style  */}

                <View style={stylesGlobal.ViewButton}>
                    <View style={{flexDirection:'row', alignItems:'center', }}>
                        <Image  source={require("../assets/image/pass.png")} style={{
                            marginRight:'7%',
                            width:37,
                            height:37,
                            marginHorizontal:'15%'
                            }}>
                        </Image>
                        <TextInput  placeholder="Password" secureTextEntry style={stylesGlobal.TextInputStyle}/>
                    </View>
                </View>        
                
                {/* style for Remember me & forget pass */}
                    
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:20,
                    marginHorizontal:'3%',
                    marginBottom:'15%'}}>

                    {/* radio style  */}

                    <TouchableOpacity style={{flexDirection:'row',}}>
                        <View style={{
                            width: 22,
                            height: 22,
                            borderRadius: 9,
                            borderWidth: 2,
                            borderColor: 'gray',
                            marginLeft: 10,
                            marginRight:'4%',}}>
                        </View>
                        <Text>Remember me</Text>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('ForgetPass')}>Forget Password ?</Text>
                </View>

                
                
                <View style={{alignItems:'center',}} >
                    <Text>--------------------------------------or------------------------------------------</Text>

                    {/* Sign in  Button style  */}
                    
                    <TouchableOpacity  style={[stylesGlobal.ViewButton,
                            {
                                backgroundColor:'#EBB22F',marginBottom:'6%',
                                marginTop:'3%',alignItems:'center',
                            }]}>
                        <Text style={{        
                            fontWeight:'500',
                            fontSize:18,
                            lineHeight:27,
                            textAlign:'center',}}>
                        Sign In with Password</Text>
                    </TouchableOpacity>

                    {/* image style */}

                    <View style={{flexDirection:'row', alignItems:'center',}}>
                        <Image style={{marginRight:'8%'}} source={require("../assets/image/google-logo.png")}></Image>
                        <Image source={require("../assets/image/apple-logo.png")}></Image>
                    </View>

                        {/* text style */}

                        <Text style={{        
                            fontWeight:"500",
                            fontSize:15,
                            lineHeight:21,
                            textAlign:'center',
                            color:'#5B5555',
                            marginTop:'12%'}}>
                        Don’t you have an account ?<Text onPress={() => navigation.navigate('SignUp')} style={{color:'#000000',fontWeight:'600',}}>Sign Up</Text> </Text>
                </View>
            </View>
            
        </View>
    );
}