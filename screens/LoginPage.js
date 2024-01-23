import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import stylesGlobal from "./styles/style";

export default function LoginPage({ navigation }) {
  return (
    <View style={{ marginHorizontal: 12, flex: 1 }}>
      {/* Logo */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <Image
          style={{ width: 124, height: 150 }}
          source={require("../assets/image/logo.png")}
        ></Image>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 36,
            lineHeight: 54,
            textAlign: "center",
          }}
        >
          Let’s You In
        </Text>
      </View>

      {/* Botton */}

      <View style={{ marginBottom: "4%", flex: 1, justifyContent: "center" }}>
        {/* Button google  */}

        <TouchableOpacity
          style={stylesGlobal.ViewButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <View style={stylesGlobal.DirectionImage}>
            <Image
              source={require("../assets/image/google-logo.png")}
              style={{
                marginRight: "7%",
                width: 22,
                height: 24,
                marginHorizontal: "15%",
              }}
            ></Image>
            <Text style={stylesGlobal.TextInputStyle}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>

        {/* Button Apple  */}

        <TouchableOpacity
          style={stylesGlobal.ViewButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <View style={stylesGlobal.DirectionImage}>
            <Image
              source={require("../assets/image/apple-logo.png")}
              style={{
                marginRight: "6%",
                width: 30,
                height: 33,
                marginHorizontal: "15%",
              }}
            ></Image>
            <Text style={stylesGlobal.TextInputStyle}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
        <Text>
          --------------------------------------or------------------------------------------
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={[
            stylesGlobal.ViewButton,
            {
              backgroundColor: "#EBB22F",
              marginTop: "8%",
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 18,
              lineHeight: 27,
              textAlign: "center",
            }}
          >
            Sign In with Password
          </Text>
        </TouchableOpacity>
      </View>

     

      <View style={{ flex: 1 ,justifyContent:'center'}}>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 21,
            textAlign: "center",
            color: "#5B5555",
            marginTop: "15%",
          }}
        >
          Don’t you have an account ?
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{ color: "black", fontWeight: "500" }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
