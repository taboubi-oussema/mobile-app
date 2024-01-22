import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Intro({ navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={Styles.form}
      onPress={() => navigation.navigate("Bording")}
    >
      <Image source={require("../assets/image/banner.png")}></Image>
      <View style={Styles.form_img}>
        <Image
          style={Styles.img}
          source={require("../assets/image/Cool_Meal.png")}
        ></Image>
        <Text style={Styles.text}>We will make your mood</Text>
      </View>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: 320,
    height: 141,
    marginBottom: "18%",
  },
  form_img: {
    justifyContent: "center",

    position: "absolute",
    top: "50%",
  },
  text: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
  },
});
