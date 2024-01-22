import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Foundation,
  Octicons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import stylesGlobal from "./styles/style";

export default function SignUp({ navigation }) {
  return (
    <ScrollView style={{ marginHorizontal: "5%" }}>
      {/* Logo */}

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4%",
          marginBottom: "8%",
        }}
      >
        <Image
          style={{
            width: 124,
            height: 140,
            marginTop: "3%",
          }}
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
          Sign Up
        </Text>
      </View>

      {/* Body */}

      {/* Input Buttons  */}

      <View
        style={[
          stylesGlobal.ViewButton,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          },
        ]}
      >
        <Octicons
          name="person"
          size={24}
          color="black"
          style={{ marginHorizontal: 15 }}
        />
        <TextInput
          style={stylesGlobal.TextInputStyle}
          placeholder="Your Name"
        />
      </View>
      <View style={{ marginBottom: 45 }}>
        <View
          style={[
            stylesGlobal.ViewButton,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            },
          ]}
        >
          <Fontisto
            name="email"
            size={24}
            color="black"
            style={{ marginHorizontal: 15 }}
          />
          <TextInput style={stylesGlobal.TextInputStyle} placeholder="Email" />
        </View>

        <View
          style={[
            stylesGlobal.ViewButton,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            },
          ]}
        >
          <Foundation
            name="telephone"
            size={24}
            style={{ marginHorizontal: 15 }}
          />
          <TextInput
            style={stylesGlobal.TextInputStyle}
            placeholder="Enter Mobile Number"
            keyboardType="numeric"
          />
        </View>

        <View
          style={[
            stylesGlobal.ViewButton,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            },
          ]}
        >
          <MaterialIcons
            name="lock-outline"
            size={24}
            color="black"
            style={{ marginHorizontal: 15 }}
          />
          <TextInput
            style={stylesGlobal.TextInputStyle}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        {/* Sign Up  Button   */}

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
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>or continue with</Text>

        {/* images */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "10%",
            justifyContent: "space-around",
            marginHorizontal: "15%",
          }}
        >
          <View style={stylesGlobal.imagesBorder}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../assets/image/apple-logo.png")}
            ></Image>
          </View>
          <View style={stylesGlobal.imagesBorder}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../assets/image/google-logo.png")}
            ></Image>
          </View>
          <View style={stylesGlobal.imagesBorder}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../assets/image/apple-logo.png")}
            ></Image>
          </View>
        </View>
      </View>

      {/* Footer */}

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            lineHeight: 21,
            color: "#5B5555",
          }}
        >
          Already have an account?
          <Text
            onPress={() => navigation.navigate("SignIn")}
            style={{ color: "#000000", fontWeight: "600" }}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
