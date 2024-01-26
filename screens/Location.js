import { View, Text, TouchableOpacity, Image,TextInput } from "react-native";
import React from "react";
import stylesGlobal from "./styles/style";
export default function Location() {
  return (
    <View style={{ flex: 1, marginHorizontal: "5%" }}>
      <View
        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
      ></View>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 50 }}
          source={require("../assets/image/image_10-removebg-preview.png")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 18,
            lineHeight: 27,
            paddingLeft: "10%",
            color: "#756B6B",
          }}
        >
          Title
        </Text>
        <TextInput
          style={[
            stylesGlobal.ViewButton,
            {
              marginTop: "3%",
              alignItems: "center",
            },
          ]}
        ></TextInput>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 18,
            lineHeight: 27,
            paddingLeft: "10%",
            color: "#756B6B",
          }}
        >
          Address
        </Text>

        <TextInput
          style={[
            stylesGlobal.ViewButton,
            {
              marginTop: "3%",
              alignItems: "center",
            },
          ]}
        ></TextInput>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 9,
              borderWidth: 2,
              borderColor: "gray",
              marginLeft: 10,
              marginRight: "4%",
            }}
          ></View>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              lineHeight: 27,

              color: "#756B6B",
            }}
          >
            Make this as default address
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={[
            stylesGlobal.ViewButton,
            {
              backgroundColor: "#EBB22F",
              marginTop: "3%",
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
    </View>
  );
}

