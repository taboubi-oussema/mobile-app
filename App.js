import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./screens/LoginPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Intro from "./screens/Intro";
import MailApp from "./screens/MailApp";
import Bording from "./screens/Bording";
import Notifications from "./screens/Notifications";
import ResetPass from "./screens/ResetPass";
import ForgetPass from "./screens/ForgetPass";
import VerifNumber from "./screens/VerifNumber";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={ResetPass}
          /> */}

          <Stack.Screen
            options={{ headerShown: false }}
            name="Intro"
            component={Intro}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Bording"
            component={Bording}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginPage"
            component={LoginPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            name="ForgetPass"
            component={ForgetPass}
            options={{
              headerTitle: "Forget Password",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MailApp"
            component={MailApp}
          />
          <Stack.Screen
            name="ResetPass"
            component={ResetPass}
            options={{
              headerTitle: "Reset Password",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="VerifNumber"
            component={VerifNumber}
            options={{
              headerTitle: "Verify phone Number",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Notifications"
            component={Notifications}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
