import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import stylesGlobal from "./styles/style";

export default function ForgetPass() {
  return (
    <View style={{ marginHorizontal: 12, marginTop: "15%" }}>
      <Text style={{ textAlign: "center", paddingBottom: "8%" }}>
        Enter the email associated with your account and{"\n"} we'll send an
        email with instructions to reset {"\n"} your password
      </Text>
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
          Send Instructions
        </Text>
      </TouchableOpacity>
    </View>
  );
}
