import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen/HomeScreen";
const Tab = createBottomTabNavigator();
import { HomeScreenOptions } from "../Config/Options";

const AppScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={HomeScreenOptions}
        name="Home"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};
export default AppScreen;
