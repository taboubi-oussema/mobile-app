import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import stylesGlobal from "./styles/style";

export default function VerifNumber() {
  return (
    <View style={{ marginHorizontal: 14, marginTop: "15%" }}>
      <Text style={{ textAlign: "center", paddingBottom: "8%" }}>
        please enter the verirication code we send to{"\n"} your mobile *** ***
        *56
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 12,
        }}
      >
        <TextInput
          keyboardType="numeric"
          style={stylesGlobal.InputBorderStyle}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          style={stylesGlobal.InputBorderStyle}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          style={stylesGlobal.InputBorderStyle}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          style={stylesGlobal.InputBorderStyle}
        ></TextInput>
      </View>

      <View style={{ alignItems: "flex-end", marginVertical: 12 }}>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            lineHeight: 21,
            color: "#5B5555",
          }}
        >
          Not yet get ?
          <Text style={{ color: "#000000", fontWeight: "700" }}>
            Resend OTP
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        style={[
          stylesGlobal.ViewButton,
          {
            backgroundColor: "#EBB22F",
            marginBottom: "6%",
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
          Verify
        </Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
        }}
      >
        <TextInput
          style={{
            borderStyle: "dashed",
            padding: 15,
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 2,
            fontSize: 20,
            textAlign: "center",
          }}
          placeholder="50Sec left"
        ></TextInput>
      </View>
    </View>
  );
}
