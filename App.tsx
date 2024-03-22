import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreenOptions,
  RegisterScreenOptions,
  AppScreenOptions,
} from "./src/Screens/Config/Options";
import LoginScreen from "./src/Screens/User/LoginScreen/LoginScreen";
import AppScreen from "./src/Screens/AppScreen/AppScreen";
import RegisterScreen from "./src/Screens/User/RegisterScreen/RegisterScreen";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

WebBrowser.maybeCompleteAuthSession();

// Android OAuth ID
//975130523286-6q5f6v0io2lufh5m0367tisfmehdc8q5.apps.googleusercontent.com
// Web OAuth ID
//975130523286-ifm4neiv061auikna08p5fkcaqvl5d6c.apps.googleusercontent.com

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={LoginScreenOptions}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={RegisterScreenOptions}
        />
        <Stack.Screen
          name="App"
          component={AppScreen}
          options={AppScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
