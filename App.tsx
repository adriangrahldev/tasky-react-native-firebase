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
