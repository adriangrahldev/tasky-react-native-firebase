import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreenOptions, HomeScreenOptions } from "./src/Screens/Config/Options";
import LoginScreen from "./src/Screens/User/LoginScreen/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import RegisterScreen from "./src/Screens/User/RegisterScreen/RegisterScree";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={LoginScreenOptions} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

