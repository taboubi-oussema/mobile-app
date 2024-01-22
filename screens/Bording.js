import { Image, View, Text, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function Bording({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onSkip={() => navigation.navigate("LoginPage")}
        onDone={() => navigation.navigate("LoginPage")}
        pages={[
          {
            backgroundColor: "white",
            image: (
              <Image
                style={{ width: 300, height: 300 }}
                source={require("../assets/image/a.png")}
              />
            ),
            title: (
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 36,
                  lineHeight: 54,
                  paddingBottom: 19,
                }}
              >
                Select Restaurant
              </Text>
            ),
            subtitle: "Your favourite foods delivered at your \n door",
          },
          {
            backgroundColor: "white",
            image: (
              <Image
                style={{ width: 300, height: 320 }}
                source={require("../assets/image/c.png")}
              />
            ),
            title: (
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 36,
                  lineHeight: 54,
                  paddingBottom: 19,
                }}
              >
                Order Food
              </Text>
            ),
            subtitle: " Easily find the type of food you craving",
          },

          {
            backgroundColor: "white",
            image: (
              <Image
                style={{ width: 300, height: 300 }}
                source={require("../assets/image/b.png")}
              />
            ),
            title: (
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 36,
                  lineHeight: 54,
                  paddingBottom: 19,
                }}
              >
                Deliver to Home
              </Text>
            ),
            subtitle:
              " To get your food , our delivery executives\n deliver to your home.",
          },
        ]}
      />
    </View>
  );
}
