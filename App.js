import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
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
import Location from "./screens/Location";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="feed" component={ForgetPass} />
          <Drawer.Screen name="home" component={SignUp} />
        </Drawer.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={SignUp}
            options={{
              headerTitle: "Set Your Location",
              headerTitleAlign: "center",
              headerShown: false,
            }}
          />

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
